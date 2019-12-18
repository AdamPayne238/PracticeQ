const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('../prisma/generated/prisma-client')
const { buildFederatedSchema } = require('@apollo/federation')

const typeDefs = require('./schema')
const Mutation = require('./resolvers/Mutation')
const Query = require('./resolvers/Query')
const Post = require('./resolvers/Post')
const Job = require('./resolvers/Job')
const Industry = require('./resolvers/Industry')
const Tag = require('./resolvers/Tag')

const resolvers = {
    Query,
    Mutation,
    Post,
    Job,
    Industry,
    Tag,
}

const server = new GraphQLServer({
    schema: buildFederatedSchema([
        {
            typeDefs,
            resolvers,
        },
    ]),
    context: request => {
        return { ...request, prisma}
    },
})

module.exports = server