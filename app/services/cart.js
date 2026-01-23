import Service from "@ember/service";
import { tracked } from "@glimmer/tracking";

export default class CartService extends Service {
  @tracked items = [];

  addToCart(product) {
    const existingItem = this.items.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({
        ...product,
        quantity: 1
      });
    }
  }

  removeFromCart(productId) {
    this.items = this.items.filter(item => item.id !== productId);
  }

  updateQuantity(productId, quantity) {
    const item = this.items.find(item => item.id === productId);
    if (item) {
      item.quantity = quantity;
    }
  }

  get totalPrice() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  }

  get totalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  clearCart() {
    this.items = [];
  }
}
