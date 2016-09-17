import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('levels');
  this.route('level', { path: '/level/:level_id' }, function() {
    this.route('random');
  });
});

export default Router;
