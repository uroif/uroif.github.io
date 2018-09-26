Vue.component('my-canvas', {
    template: `
  <div class="my-canvas-wrapper">
    <canvas ref="my-canvas"></canvas>
    <slot></slot>
  </div>`,

    data() {
        return {
            // By creating the provider in the data property, it becomes reactive,
            // so child components will update when `context` changes.
            provider: {
                // This is the CanvasRenderingContext that children will draw to.
                context: null
            }
        }
    },

    // Allows any child component to `inject: ['provider']` and have access to it.
    provide() {
        return {
            provider: this.provider
        }
    },

    mounted() {
        // We can't access the rendering context until the canvas is mounted to the DOM.
        // Once we have it, provide it to all child components.
        this.provider.context = this.$refs['my-canvas'].getContext('2d')

        // Resize the canvas to fit its parent's width.
        // Normally you'd use a more flexible resize system.
        this.$refs['my-canvas'].width = this.$refs['my-canvas'].parentElement.clientWidth
        this.$refs['my-canvas'].height = this.$refs['my-canvas'].parentElement.clientHeight
    }
})

const percentWidthToPix = (percent, ctx) => Math.floor((ctx.canvas.width / 100) * percent),
const percentHeightToPix = (percent, ctx) => Math.floor((ctx.canvas.height / 100) * percent),

Vue.component('my-box', {
    // Note how there's no template or styles in this component.

    // Helper functions to convert a percentage of canvas area to pixels.

  // Gets us the provider property from the parent <my-canvas> component.
  inject: ['provider'],

    props: {
        // Start coordinates (percentage of canvas dimensions).
        x1: {
            type: Number,
            default: 0
        },
        y1: {
            type: Number,
            default: 0
        },

        // End coordinates (percentage of canvas dimensions).
        x2: {
            type: Number,
            default: 0
        },
        y2: {
            type: Number,
            default: 0
        },

        // The value to display.
        value: {
            type: Number,
            defualt: 0
        },

        // The color of the box.
        color: {
            type: String,
            default: '#F00'
        }
    },

    data() {
        return {
            // We cache the dimensions of the previous
            // render so that we can clear the area later.
            oldBox: {
                x: null,
                y: null,
                w: null,
                h: null
            }
        }
    },

    computed: {
        calculatedBox() {
            const ctx = this.provider.context

            // Turn start / end percentages into x, y, width, height in pixels.
            const calculated = {
                x: percentWidthToPix(this.x1, ctx),
                y: percentHeightToPix(this.y1, ctx),
                w: percentWidthToPix(this.x2 - this.x1, ctx),
                h: percentHeightToPix(this.y2 - this.y1, ctx)
            }

            // Yes yes, side-effects. This lets us cache the box dimensions of the previous render.
            // before we re-calculate calculatedBox the next render.
            this.oldBox = calculated
            return calculated
        }
    },

    render() {
        // Since the parent canvas has to mount first, it's *possible* that the context may not be
        // injected by the time this render function runs the first time.
        if (!this.provider.context) return;
        const ctx = this.provider.context;

        // Keep a reference to the box used in the previous render call.
        const oldBox = this.oldBox
        // Calculate the new box. (Computed properties update on-demand.)
        const newBox = this.calculatedBox

        ctx.beginPath();
        // Clear the old area from the previous render.
        ctx.clearRect(oldBox.x, oldBox.y, oldBox.w, oldBox.h);
        // Clear the area for the text.
        ctx.clearRect(newBox.x, newBox.y - 42, newBox.w, 100);

        // Draw the new rectangle.
        ctx.rect(newBox.x, newBox.y, newBox.w, newBox.h);
        ctx.fillStyle = this.color;
        ctx.fill();

        // Draw the text
        ctx.fillStyle = '#000'
        ctx.font = '28px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(Math.floor(this.value), (newBox.x + (newBox.w / 2)), newBox.y - 14)
    }
})

var app = new Vue({
    el: '#app',
    components: {
        MyCanvas,
        MyBox
    },
    data() {
        return {
            chartValues: [
                { val: 24, color: 'red' },
                { val: 32, color: '#0f0' },
                { val: 66, color: 'rebeccapurple' },
                { val: 1, color: 'green' },
                { val: 28, color: 'blue' },
                { val: 60, color: 'rgba(150, 100, 0, 0.2)' },
            ]
        }
    },

    // Randomly selects a value to randomly increment or decrement every 16 ms.
    // Not really important, just demonstrates that reactivity still works.
    mounted() {
        let dir = 1;
        let selectedVal = Math.floor(Math.random() * this.chartValues.length);

        setInterval(() => {
            if (Math.random() > 0.995) dir *= -1;
            if (Math.random() > 0.99) selectedVal = Math.floor(Math.random() * this.chartValues.length);

            this.chartValues[selectedVal].val = Math.min(Math.max(this.chartValues[selectedVal].val + dir * 0.5, 0), 100);
        }, 16);
    }
})