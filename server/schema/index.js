import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt
} from 'graphql';

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      count: {
        type: GraphQLInt,
        args: {
          id: { type: GraphQLInt }
        },
        resolve: (_, args) => {
          return args.id;
        }
      }
    }
  })
});
