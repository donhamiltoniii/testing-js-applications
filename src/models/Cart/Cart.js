class Cart {
  constructor() {
    this.items = [];
  }

  addToCart(item) {
    this.items.push(item);
  }

  removeFromCart(item) {
    for (let index = 0; index < this.items.length; index++) {
      const currentItem = this.items[index];
      if (currentItem === item) {
        this.items.splice(index, 1);
      }
    }
  }
}

module.exports = Cart;
