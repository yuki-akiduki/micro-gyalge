import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'gyaruge',
  apiKey: process.env.API_KEY,
});