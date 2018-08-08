'use strict';

module.exports = {
  name: 'ember-glimmer-components',
  config(env, appConfig) {
    appConfig.EmberENV.FEATURES.EMBER_METAL_TRACKED_PROPERTIES = true;
    appConfig.EmberENV.FEATURES.GLIMMER_COMPONENT_MANAGER_BOUNDS = true;
    return this._super.config.apply(this, [env, appConfig]);
  }
};
