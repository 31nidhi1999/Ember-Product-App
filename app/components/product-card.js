import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class ProductCardComponent extends Component {
  @service cart;

  addToCart = (product) => {
    this.cart.addToCart(product);
  };
}
