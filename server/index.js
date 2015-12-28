/* global process */

import express from 'express';
import graphqlHTTP from 'express-graphql';
import { schema } from './schema/index.js';

const app = express();
const port = process.env.PORT || 8080;

app.use('/graphql', graphqlHTTP({ schema, pretty: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log('Server listen port %s', port);
});
