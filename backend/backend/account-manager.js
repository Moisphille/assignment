import supertokens from "supertokens-auth-react"
import ThirdPartyEmailPassword from "supertokens-auth-react/recipe/thirdpartyemailpassword"
import Passwordless from "supertokens-auth-react/recipe/passwordless"
import MultiFactorAuth from "supertokens-auth-react/recipe/multifactorauth"

const fastify = require('fastify')();
const supertokens = require('supertokens-node');
const { ExpressWrapper } = require('@supertokens/express');

supertokens.init({
    appInfo: {
        appName: "...",
        apiDomain: "http://localhost:5500/backend/payment-manajer.js",
        websiteDomain: "...",
    },
    recipeList: [
        ThirdPartyEmailPassword.init( /* ... */),
        Passwordless.init({
             contactMethod: "EMAIL_OR_PHONE",
        }),
        MultiFactorAuth.init({
            firstFactors: ["emailpassword", "thirdparty"]
        })
    ]
})

fastify.register(ExpressWrapper, {
    supertokens,
});

fastify.post('/signup', async (request, reply) => {
    // Handle user signup
});

fastify.post('/login', async (request, reply) => {
    // Handle user login
});

fastify.get('/accounts', async (request, reply) => {
    // Retrieve user accounts
});

fastify.listen(5500, () => {
    console.log('Account Manager running on port 5500');
});
