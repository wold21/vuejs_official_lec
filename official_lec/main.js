var app = new Vue({
  el: "#app",
  data: {
    brand: "Vue Mastery",
    product: "Stock",
    description: "A pair of warm fuzzy socks",
    selectedVariant: 0,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantID: 2234,
        variantColor: "beige",
        variantImage: "./img/beige.jpeg",
        vatiantQuantity: 10,
      },
      {
        variantID: 2235,
        variantColor: "black",
        variantImage: "./img/b_g.jpeg",
        vatiantQuantity: 0,
      },
    ],
    cart: 0,
  },
  methods: {
    onClickLink() {
      window.open("https://vinzip.kr/", "_blank");
    },
    addToCart() {
      this.cart += 1;
    },
    delToCart() {
      if (this.cart == 0) {
        this.cart = 0;
      } else {
        this.cart -= 1;
      }
    },
    updateProduct(index) {
      this.selectedVariant = index;
      console.log(index);
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].vatiantQuantity;
    },
  },
});
