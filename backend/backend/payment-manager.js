const fastify = require('fastify')();
const { processTransaction } = require('./transactionProcessor');

fastify.post('/send', async (request, reply) => {
    // Handle send transaction
});

fastify.post('/withdraw', async (request, reply) => {
    // Handle withdraw transaction
});

fastify.get('/transactions/:accountId', async (request, reply) => {
    // Retrieve transactions for an account
});

fastify.listen(3001, () => {
    console.log('Payment Manager running on port 3001');
});
