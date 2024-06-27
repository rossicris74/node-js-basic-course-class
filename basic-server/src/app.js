
const fastify = require("fastify");
const {itemRoutes} = require("../src/routes/V1/items");
 
const build = (opts = {}) => {
    const app = fastify(opts);
 
    app.get("/", (request, reply) => {
        reply.send({hello: "world"});
    });
 
    app.register(itemRoutes);
 
    return app;
};
 
module.exports = {build};
 