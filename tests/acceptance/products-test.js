import { module, test } from "qunit";
import { setupApplicationTest } from "ember-qunit";
import { visit, currentURL, findAll } from "@ember/test-helpers";

module('Acceptance | product-grind | product grind', function(hooks){
   setupApplicationTest(hooks);
   
   test('shows products list', async function(assert){
        await visit('/products/1');
        assert.strictEqual(currentURL(),'/products/1','Should navigate to products description page');
        assert.ok(findAll('.card').length > 0, 'Expected at least one product displayed');
    })
});