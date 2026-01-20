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

        if (!response.ok) {
            throw new Error('PRODUCT_NOT_FOUND');
        }

        const text = await response.text();

        if (!text) {
            throw new Error('PRODUCT_NOT_FOUND');
        }

        return JSON.parse(text);
    }
}