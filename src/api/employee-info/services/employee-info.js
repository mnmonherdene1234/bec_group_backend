'use strict';

/**
 * employee-info service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::employee-info.employee-info');
