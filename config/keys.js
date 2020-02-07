// keys.js - figure out what set of credentials to return
// eslint-disable-next-line no-restricted-globals
// if (!location.hostname === '127.0.0.1'){
// //we are in production - return the production set of keys
//     module.export = require('./prod');
// }else {
//     //we are in development - return the dev keys!!!
//     module.export = require('./dev');
// };


module.exports = {
    googleClientID: '757935446541-qig5oheast10sercfulnb77ggtrtlfrj.apps.googleusercontent.com',
    googleClientSecret: 'oISQ0qS5NFU5l-Aa8aZ6E29p',
    mongoURI: 'mongodb+srv://admin:a@emaily-rm9sf.mongodb.net/test?retryWrites=true&w=majority',
    cookieKey: 'piuewokeieuwelkjasdfer',
    stripePublishableKey: 'pk_test_u0HvVaDAAyfwnL5aMQ1tzVDT00U3TyYvmg',
    stripeSecretKey: 'sk_test_DgvV8Qdys213fWTNbE1vvtBX00UIeNBMd0',
    sendGridKey: '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',
    redirectDomain: 'http://localhost:3000'
};

