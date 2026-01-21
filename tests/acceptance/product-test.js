import { module, test } from "qunit";
import { setupApplicationTest } from "ember-qunit";
import { visit, currentURL, findAll } from "@ember/test-helpers";

module('Acceptance | product-test | individual product discription', function(hooks){
   setupApplicationTest(hooks);
   
   test('shows products list', async function(assert){
        await visit('/products/1');
        assert.strictEqual(currentURL(),'/products/1','Should navigate to products page');
        
       assert.dom('.details').exists('Details container is rendered');

       assert.dom('.details img')
           .exists('Product image is rendered');

       assert.dom('.details h2')
           .exists('Product title is rendered')
           .hasText(/.+/, 'Title text is not empty');

       assert.dom('.details p')
           .exists('Product description is rendered')
           .hasText(/.+/, 'Description text is not empty');

       assert.dom('.details strong')
           .exists('Product price is rendered')
           .hasText(/\$\d+/, 'Price is displayed with dollar sign');
   });
});