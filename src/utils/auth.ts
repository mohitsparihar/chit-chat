import { account, ID } from "../appwrite";

export class AuthService {
  async createAccount(email: string, password: string, name: string) {
    try {
      const user = await account.create(ID.unique(), email, password, name);
      if (user) {
        return this.login(email, password);
      } else {
        return user;
      }
    } catch (error) {
      throw error;
    }
  }

  async login(email: string, password: string) {
    try {
      return await account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }
  async getCurrentUser() {
    try {
      return await account.get();
    } catch (error) {
      console.log("Appwrite service :: getCuurentUser() ::", error);
    }
    return null;
  }

  async logout() {
    try {
      return await account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service :: logout() ::", error);
    }
  }
}
