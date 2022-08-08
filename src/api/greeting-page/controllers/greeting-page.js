'use strict';

/**
 *  greeting-page controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::greeting-page.greeting-page');
