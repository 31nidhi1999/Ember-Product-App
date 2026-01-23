import Service from "@ember/service";

const BASE_URL = "https://fakestoreapi.com/products";

export default class ProductApiService extends Service{
    async getAllProducts(){
        const response = await fetch(BASE_URL);

        if(!response.ok){
            throw new Error('Failed to fetch products');
        }

        return response.json();
    }

    async getProductById(id) {
        const response = await fetch(`${BASE_URL}/${id}`);
        const text = await response.text();
        
        if (!text) {
            const error = new Error('PRODUCT_NOT_FOUND');
            error.status = 404;
            throw error;
        }
        
        try {
            return JSON.parse(text);
        } catch (e) {
            const error = new Error('PRODUCT_NOT_FOUND');
            error.status = 404;
            throw error;
        }
    }
}