const items = [
    {id: "1", name: "test", description: "blabla"},
    {id: "2", name: "test2", description: "blabla2"},
    {id: "3", name: "test3", description: "blabla3"},
];

const itemRoutes = (fastify, options, done) => {
    fastify.get("/items", (request, reply) => {reply.send(items);

    });

    fastify.get("/items/:id", (request, reply) => {
        const {id} = request.params;
        reply.send(items.find(ele => ele.id == id 
        ));
    });

    fastify.get("/itemsLength", (request, reply) => {
        const {id} = request.params;
        reply.send(items.length);
    });


    done()

};

module.exports = {itemRoutes};