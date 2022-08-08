'use strict';

/**
 * greeting-page service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::greeting-page.greeting-page');
