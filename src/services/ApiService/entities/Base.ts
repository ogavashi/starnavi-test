/* eslint-disable @typescript-eslint/no-explicit-any */
export class Base {
  apiClient: any;

  constructor({ apiClient }: { apiClient: any }) {
    if (!apiClient) throw new Error("[apiClient] required");
    this.apiClient = apiClient;
  }
}
