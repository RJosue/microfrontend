const { withModuleFederation } = require('@nrwl/react/module-federation');

const baseConfig = require('./module-federation.config');

const prodConfig = {
  ...baseConfig,
  /*
   * Remote overrides for production.
   * Each entry is a pair of an unique name and the URL where it is deployed.
   *
   * e.g.
   * remotes: [
   *   ['app1', 'http://app1.example.com'],
   *   ['app2', 'http://app2.example.com'],
   * ]
   *
   * You can also use a full path to the remoteEntry.js file if desired.
   *
   * remotes: [
   *   ['app1', 'http://example.com/path/to/app1/remoteEntry.js'],
   *   ['app2', 'http://example.com/path/to/app2/remoteEntry.js'],
   * ]
   */
  remotes: [
    [
      'telemedicine',
      'https://super-app-federation.s3.us-east-2.amazonaws.com/telemedicine/remoteEntry.js',
    ],
    [
      'reimbursement',
      'https://super-app-federation.s3.us-east-2.amazonaws.com/reimbursement/remoteEntry.js',
    ],
  ],
};

module.exports = withModuleFederation({
  ...prodConfig,
});
