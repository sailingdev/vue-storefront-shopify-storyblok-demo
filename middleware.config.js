module.exports = {
  integrations: {
    sb: {
      location: '@vue-storefront/storyblok/server',
      configuration: {
        token: 'TrKX7tsa8Xr9S8Mf6QxMhQtt',
        cacheProvider: 'memory',
      },
    },
    shopify: {
      location: '@vue-storefront/shopify-api/server',
      configuration: {
        api: {
          domain: process.env.SHOPIFY_DOMAIN,
          storefrontAccessToken: process.env.SHOPIFY_STOREFRONT_TOKEN,
          apiVersion: "2022-01"
        },
        currency: 'USD',
        country: 'US'
      }
    }
  }
};
