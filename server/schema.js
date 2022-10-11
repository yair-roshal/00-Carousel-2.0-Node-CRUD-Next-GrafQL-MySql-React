const {buildSchema} = require('graphql')

const schema = buildSchema(`
    
    type Writer {
        id: ID
        name: String
        image: String
        article : String

     }
 
    
    input WriterInput {
        id: ID
        name: String!
        image: String!
        article : String!

     }
 
    
    type Query {
        getAllWriters: [Writer]
        getWriter(id: ID): Writer
    }
    type Mutation {
        createWriter(input: WriterInput): Writer
    }

`)

module.exports = schema
