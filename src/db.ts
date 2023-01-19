import { MongoClient } from "mongodb";

const {
  MONGO_URI = "mongodb+srv://abel:abel123@typescript.0oepp9m.mongodb.net/?retryWrites=true&w=majority",
} = process.env;

export const client = new MongoClient(MONGO_URI);
export const db = client.db();
