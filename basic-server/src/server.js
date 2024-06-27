// const fastify = require("fastify")({logger:true});
const {build}  = require("./app");
const app = build({logger:true})
//fastify.get("/",(request,reply) => {reply.send({hello:"world"});
//});
app.listen({port:3000,host:"127.0.0.1"});
