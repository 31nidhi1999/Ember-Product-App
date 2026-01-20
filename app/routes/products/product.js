import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class ProductsProductRoute extends Route {
    @service productApi;

    model({ product_id }) {
        try {
            return this.productApi.getProductById(product_id);
        } catch (error) {
            this.router.replaceWith('not-found');
        }
    }
}