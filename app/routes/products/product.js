import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class ProductsProductRoute extends Route {
    @service productApi;
    @service router;

    async model({ product_id }) {
        return await this.productApi.getProductById(product_id);
    }

    error(error) {
    if (error.status === 404) {
      this.router.transitionTo('not-found');
      return false;
    }
    return true;
  }
}