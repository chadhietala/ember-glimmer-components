'use strict';

module.exports = {
  name: 'ember-glimmer-components',
  config(env, appConfig) {
    appConfig.EmberENV.FEATURES.EMBER_METAL_TRACKED_PROPERTIES = true;
    appConfig.EmberENV.FEATURES.GLIMMER_COMPONENT_MANAGER_BOUNDS = true;
    return this._super.config.apply(this, [env, appConfig]);
  },
  included(parent) {
    this._super.included.apply(parent);
    const parentoptions = parent.options || {};
    parentoptions.babel = parentoptions.babel || {};
    parentoptions.babel.plugins = parentoptions.babel.plugins || [];

    if (!this._registeredtrackedpropertiestransform) {
      parentoptions.babel.plugins.push(require.resolve('babel-plugin-transform-tracked-properties'));
      this._registeredtrackedpropertiestransform = true;
    }
  }
};
