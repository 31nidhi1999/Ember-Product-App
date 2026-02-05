import EmberRouter from '@ember/routing/router';
import config from 'product-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('products', function () {
    this.route('product', { path: '/:product_id' });
  });
  this.route('cart');
  this.route('checkout');
  this.route('tooltip');
  this.route('bookings');
  this.route('plan', function () {
    this.route('step-1');
  });
  this.route('not-found', { path: '/*path' });
});
