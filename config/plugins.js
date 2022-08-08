module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('fun-plus'),
        api_key: env('726271334665895'),
        api_secret: env('X5fh4uf2-9jFUjepJyh4ByHjz-U'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});