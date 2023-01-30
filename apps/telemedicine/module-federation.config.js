module.exports = {
  name: 'telemedicine',
  exposes: {
    './Module': 'apps/telemedicine/src/remote-entry.ts',
  },
};
