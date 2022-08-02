const fs = require('fs')
module.exports = {
  development: {
    app: {
      name: 'Passport SAML strategy example',
      port: process.env.PORT || 3000
    },
    passport: {
      strategy: 'saml',
      saml: {
        path: process.env.SAML_PATH || '/login/callback',
        entryPoint: process.env.SAML_ENTRY_POINT || 'https://portal.sso.eu-west-2.amazonaws.com/saml/assertion/NTIwMTM4NTI5ODgwX2lucy00MjI1Y2ZiOGFlMjZkYzdi',
        issuer: 'passport-saml',
        cert: process.env.SAML_CERT || fs.readFileSync('awsssocert.pem','utf-8')
      }
    }
  }
};
