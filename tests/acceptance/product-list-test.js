import { module, test } from "qunit";
import { setupApplicationTest } from "ember-qunit";
import { visit, currentURL, findAll } from "@ember/test-helpers";

module('Acceptance | Products List', function(hooks){
   setupApplicationTest(hooks);
   
   test('shows products list', async function(assert){
        await visit('/products');
        assert.strictEqual(currentURL(),'/products','Should navigate to products page');
        assert.ok(findAll('.card').length > 0, 'Expected at least one product displayed');
    })
});