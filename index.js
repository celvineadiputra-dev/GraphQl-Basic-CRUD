const { ApolloServer } = require('apollo-server');
const monggose = require('mongoose');

const typeDefs = require('./schema')
const resolvers = require('./resolvers')

//connection to mongodb
monggose.connect('mongodb://localhost:27017/graphql-learn');

const server = new ApolloServer({
    typeDefs, 
    resolvers
});

server.listen()
    .then(({url}) => {
        console.log(url)
    })