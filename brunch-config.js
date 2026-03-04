module.exports = {
  paths: {
    public: 'public',
    watched: ['app']
  },
  files: {
    javascripts: { joinTo: '_unused.js' },
    stylesheets: { joinTo: '_unused.css' }
  },
  server: {
    port: 3333,
    noPushState: true
  }
};
