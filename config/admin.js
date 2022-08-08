module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ecd7b2be63432b02c7ce68a75ba8f87a'),
  },
});
