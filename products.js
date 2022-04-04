/* global Vue, axios */

var App = {
  data: function () {
    return {
      message: "Hello from JavaScript!",
    };
  },
  methods: {
    loadProducts: function () {
      axios.get("http://localhost:3000/products.json").then((response) => console.log(response.data);
      this.products = resonse.data;
    },
  },
};

Vue.createApp(App).mount("#app");
