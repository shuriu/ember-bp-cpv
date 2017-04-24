import Ember from 'ember';
import config from './config/environment';

const {
  Router: EmRouter
} = Ember;

const Router = EmRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
});

export default Router;
