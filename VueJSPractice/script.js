Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
        <div class="product">
        
            <div class="product_image">
                <img :src=image />
            </div>

            <div class="product_info">
                <h1>{{ title }}</h1>
                <p v-if="inStock">In stock</p>
                <p v-else>Out of stock</p>
                <p>Shipping: {{ shipping }}</p>

                <div class="qty">Quantity: {{ inStock }}</div>

                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>

                <div class="color_box"
                     v-for="(variant, index) in variants" 
                     :key="variant.variantId"
                     :style="{ backgroundColor: variant.variantColor }"
                     @mouseover="updateProduct(index)" >
                </div >

                <button v-on:click="addToCart" 
                     :disabled="!inStock" 
                     :class="{ disabledButton: !inStock }">
                    Add to Cart
                </button>
                
                <button class="remove" 
                     @click="removeFromCart" 
                     :disabled = "!inStock" 
                     :class="{ disabledButton: !inStock }">
                    Remove from Cart
                </button >

                <div class="cart">
                    <p>Cart ({{ cart }})</p>
                </div>

            </div >
        </div>
    `,
    data() {
        return {
            brand: 'Amazon',
            productName: 'Bike',
            selectedVariant: 0,
            details: ['Easy driving', 'Safely', 'Fast and Furious'],
            variants: [
                {
                    variantId: 1000,
                    variantColor: 'Blue',
                    variantImage: './images/blue_bike.jpg',
                    variantQty: 25,
                },
                {
                    variantId: 1001,
                    variantColor: 'Green',
                    variantImage: './images/green_bike.jpg',
                    variantQty: 50,
                },
            ],
            cart: 0,
        }
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
            return this.variants[this.selectedVariant].variantImage;
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQty;
        },
        shipping() {
            if(this.premium) {
                return "Free"
            }
            return 2.99
        }
    },
})

var app = new Vue({
    el: '#app',
    data: {
        premium: false
    }
})