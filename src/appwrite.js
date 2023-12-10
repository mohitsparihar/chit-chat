import { Client, Account } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6575c41225987cadca4c");

export const account = new Account(client);
export { ID } from "appwrite";
