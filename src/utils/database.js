import { Databases, Storage, Queries } from "appwrite";
import { client } from "../appwrite";

export class DBService {
  constructor() {
    this.databases = new Databases(client);
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocuement(
        process.env.APPWRITE_DB_ID,
        process.env.APPWRITE_DB_POSTS_COLLECTION_ID,
        slug
      );
    } catch (error) {
      console.log("Appwrite service :: getPost() :: ", error);
      return false;
    }
  }
}

export class StorageService {
  constructor() {
    this.bucket = new Storage(client);
  }
}
