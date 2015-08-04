Package.describe({
  name: 'scottcarlsonjr:accounts-saml2',
  summary: 'SAML Authentication for Meteor',
  version: '0.0.1',
  git: 'https://github.com/scottcarlson/accounts-saml2.git'
});

Npm.depends({
  'fibers': '1.0.5',
  'body-parser': '1.12.0',
  'passport-saml': '0.9.1'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0.3.2');
  api.use('underscore');
  api.use(['routepolicy','webapp'], ['server']);
  api.use(['accounts-base'], ['client', 'server']);
  api.addFiles(['server/attribute_map.js', 'server/credential_cache.js', 'server/saml_server.js'], 'server');
  api.addFiles(['client/saml_client.js'], 'client');
});


