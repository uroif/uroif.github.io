new Vue({
    el: '#app',
    data: {
        "message"
    },
    directives: {
        insertMessage: function (canvasElement, binding) {
            // Get canvas context
            var ctx = canvasElement.getContext("2d");
            // Clear the canvas
            ctx.clearRect(0, 0, 480, 360);
            // Insert stuff into canvas

        }
    },
    watch: {
        exampleContent: function () {
            console.log("exampleContent changed to " + this.exampleContent);
        }
    }
})

Vue.component('a-canvas', {
    props: ['width', 'height', 'draw'],
    data() { return { ctx: null, }; },
    template: `<canvas :data-dummyvalue="ctx &amp;&amp; redraw">`,
    mounted() { this.ctx = this.$el.getContext('2d'); },
    computed: {
        redraw() {
            let canvas = this.$el;
            canvas.width = this.width;
            canvas.height = this.height;
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.ctx.save();
            this.draw(canvas, this.ctx);
            this.ctx.restore();
        },
    },
});