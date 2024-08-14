import ApiClient from "./ApiClient";
import { People } from "./entities";

class ApiService {
  people: People;

  constructor({ apiUrl }: { apiUrl: string }) {
    if (!apiUrl) {
      throw new Error("Invalid apiUrl");
    }

    const apiClient = new ApiClient({ apiUrl });

    this.people = new People({ apiClient });
  }
}

export default new ApiService({
  apiUrl: import.meta.env.VITE_API_URL,
});
