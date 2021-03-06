const { gql } = require('apollo-server')

const typeDefs = gql`

extend type Query {
		interviewQinfo: String!
		posts(
			industry: String
			price: String
			orderBy: String
			tags: String
			ids: [String]
		): [Post!]!
		post(id: String!): Post!
		postByCoach(coach_id: String!): Post!
		industries: [Industry]!
		industry(name: String!): [Post!]!
	}

type Mutation {
    createPost(
        price: Int!
        position: String!
        industryName: String!
        description: String!
    ): Post!

    deletePost(id: String!): Post!

    updatePost(
        id: String!
        price: Int
        position: String
        industryName: String
        description: String
    ): Post!

    removeTagFromPost(id: ID!, tagID: String): Post!
}

scalar DateTime

type Post {
    id: ID!
    price: Int
    position: String
    industry: Industry
    description: String!
    reviewerID: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    company: String
    isPublished: Boolean!
    desc_lc: String
    company_lc: String
    tags: [Tag]!
    coach: User
    ratingId: ID!
}

extend type User @key(fields: "id") {
		id: ID! @external
		post: Post
	}

type Job {
    id: ID!
    name: String!
    posts: [Post]!
    isPending: Boolean!
    isAccepted: Boolean!
    isDenied: Boolean!
    isComplete: Boolean!
    dateRequested: DateTime!
    dateAccepted: DateTime!
    dateCompleted: DateTime!
}

type Industry {
    id: ID!
    name: String!
    posts: [Post]!
}

type Tag {
	id: ID!
	name: String!
	posts: [Post]!
}

`

module.exports = typeDefs;