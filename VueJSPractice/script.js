var vm = new Vue({
    el: '#app',
    data: {
        brand: 'Amazon',
        productName: 'Bike',
        selectedVariant: 0,
        inStock: true,
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
            if (this.cart < 1) {
                return false;
            } else {
                this.cart -= 1;
            }
        },
        updateProduct(index) {
            this.selectedVariant = index;
            console.log(index);
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.productName;
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        }
    },
})