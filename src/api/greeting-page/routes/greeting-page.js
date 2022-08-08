'use strict';

/**
 * greeting-page router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::greeting-page.greeting-page');
