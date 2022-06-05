module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  'strapi::cors',
  // {
  //   name: 'strapi::cors',
  //   config: {
  //     enabled: true,
  //     header: '*',
  //     origin: "*",
  //     // origin: ['0.0.0.0', 'http://localhost:1337', 'http://localhost:8100 ']
  //   }
  // }
];
