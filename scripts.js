var products = [
  {
    photo: "img/big-mac.png",
    name: "Big Mac",
    price: 5.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/mc-chicken.png",
    name: "Mc Chicken",
    price: 4.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/double-cb.png",
    name: "Double Cheese Burger",
    price: 2.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/fries.png",
    name: "Batata frita",
    price: 2.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/nuggets.png",
    name: "Mc Nuggets",
    price: 3.49,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/salad.png",
    name: "Salada",
    price: 2.79,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/cola.png",
    name: "Coca Cola",
    price: 1.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/lipton.png",
    name: "Ice Tea",
    price: 1.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/water.png",
    name: "Água",
    price: 1.49,
    active: false,
    quantity: 1,
  },
];

const SelServiceMachine = {
  data() {
    return {
      products: window.products,
      newItem: {
        photo: "img/big-mac.png",
      },
    };
  },
  methods: {
    total: function () {
      var total = 0;

      this.products.forEach(function (item) {
        if (item.active) {
          total += item.price * item.quantity;
        }
      });

      return total.toFixed(2);
    },
    addItem() {
      if (this.newItem.name && this.newItem.price) {
        this.products.push(this.newItem);
        this.newItem = {
          photo: "img/big-mac.png",
        };
      } else {
        alert("Campos vazios");
      }
    },
  },
};

Vue.createApp(SelServiceMachine).mount("#app");
