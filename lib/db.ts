import { MongoClient } from 'mongodb';

export async function connectToDb() {
  return await MongoClient.connect(process.env.MONGO);
}
