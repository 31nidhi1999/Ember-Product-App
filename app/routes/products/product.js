import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class ProductsProductRoute extends Route {
    @service productApi;
    @service router;

    async model({ product_id }) {
        const product = await this.productApi.getProductById(product_id);
        
        if (!product || !product.id) {
            const error = new Error('PRODUCT_NOT_FOUND');
            error.status = 404;
            throw error;
        }
        return product;
    }

    error(error) {
        if (error.status === 404 || error.message === 'PRODUCT_NOT_FOUND') {
            this.router.transitionTo('not-found');
            return false;
        }
        return true;
    }
}