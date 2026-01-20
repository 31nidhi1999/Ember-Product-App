import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class ProductsRoute extends Route{
    @service productApi;

    model(){
        return this.productApi.getAllProducts();
    }
}