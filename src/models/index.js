// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Home, Note } = initSchema(schema);

export {
  Home,
  Note
};