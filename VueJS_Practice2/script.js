var app = new Vue ({
    el: '#app',
    data: {
        message: 'Hi, how are you? Hahaha',
        link: 'https://www.google.com',
        testLink: '<a href="https://twitter.com/">Click me</a>',
        show: true,
        count: 0,
        x: 0,
        y: 0,
        name: '',
        redBG: false,
        color: 'green',
        color2: 'pink',
        width: 50,
        height: 50,
        menus: ['Home', 'Gallery', 'About'],
        people: [
            {name: 'John', age: 42, address: 'California'},
            {name: 'Harry', age: 25, address: 'New Jersey'},
            {name: 'David', age: 38, address: 'Nevada'}
        ]
    },
    computed: {
        changeColor() {
            return {
                red: this.redBG,
                blue: !this.redBG,
            }
        },
        customStyle() {
            return {
                backgroundColor: this.color2,
                width: this.width + 'px',
            }
        }
    },
    methods: {
        changeValue: function(x) {
            this.message = x.target.value
        },
        saySth() {
            document.write("Hello, don't speak");
        },
        test() {
            return this.message;
        },
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        },
        coordinate(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        }
    }
})

Vue.component('welcome', {
    template: `
        <div>
            <h3>Test component</h3>
            <p>Welcome!</p>
        </div>
    `
})

var app2 = new Vue({
    el: "#app2"
})
