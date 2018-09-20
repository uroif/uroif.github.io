var vm = new Vue({
    el: '#app',
    data: {
        product_name: 'Bike',
        image: './images/green_bike.jpg',
        inStock: false,
        details: ['Easy driving', 'Safely', 'Fast and Furious'],
        variants: [
            {
                variantId: 1000,
                variantColor: 'Blue',
                variantImage: './images/blue_bike.jpg'
            },
            {
                variantId: 1001,
                variantColor: 'Green',
                variantImage: './images/green_bike.jpg'
            }
        ],
        cart: 0,
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        removeFromCart() {
            if(this.cart < 1) {
                return false;
            } else {
                this.cart -= 1;
            }
        },
        updateProduct(variantImage) {
            this.image = variantImage;
        }
    } 
})