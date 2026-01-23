import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";

export default class CartPageComponent extends Component {
  @service cart;

  @action
  removeFromCart(productId) {
    this.cart.removeFromCart(productId);
  }

  @action
  updateQuantity(productId, event) {
    const quantity = parseInt(event.target.value, 10);
    if (quantity > 0) {
      this.cart.updateQuantity(productId, quantity);
    }
  }
}
