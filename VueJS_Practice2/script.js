new Vue ({
    el: '#app',
    data: {
        message: 'Hi, how are you?'
    },
    methods: {
        changeValue: function(x) {
            this.message = x.target.value
        }
    }
})