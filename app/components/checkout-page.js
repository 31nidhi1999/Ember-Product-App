import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";

export default class CheckoutPageComponent extends Component{
    @service cart;
    @service router;

    @action
    completeCheckout(event){
        event.preventDefault();
        alert("Order placed successfully!");
        this.cart.clearCart();
        this.router.transitionTo('products');
    }
}