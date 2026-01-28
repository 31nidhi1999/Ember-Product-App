import Controller from "@ember/controller";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";

export default class ProductsProductController extends Controller {
  @service cart;

  @action
  addToCart() {
    this.cart.addToCart(this.model,1);
    console.log(this.cart.items);
    alert(`${this.model.title} added to cart!`);
  }
}