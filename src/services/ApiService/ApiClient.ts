/* eslint-disable @typescript-eslint/no-explicit-any */
import queryString from "query-string";

interface IRequest {
  url: string;
  method?: string;
  headers?: HeadersInit;
  params?: any;
  body?: any;
}

export default class ApiClient {
  apiUrl: string;

  constructor({ apiUrl }: { apiUrl: string }) {
    this.apiUrl = apiUrl;
  }

  async get(url: string, params: HeadersInit) {
    return this.request({
      url,
      params,
      method: "GET",
    });
  }

  async post(url: string, payload: unknown, params: HeadersInit) {
    return this.request({
      url,
      method: "POST",
      params,
      body: payload,
    });
  }

  async put(url: string, payload = {}) {
    return this.request({
      url,
      method: "PUT",
      body: payload,
    });
  }

  async patch(url: string, payload = {}) {
    return this.request({
      url,
      method: "PATCH",
      body: payload,
    });
  }

  async delete(url: string, payload = {}) {
    return this.request({
      url,
      method: "DELETE",
      body: payload,
    });
  }

  async request({ url, method, params = {}, body }: IRequest) {
    try {
      const requestHeaders: HeadersInit = {
        "Content-Type": "application/json",
      };
      const query = Object.keys(params).length ? `?${queryString.stringify(params)}` : "";

      const response = await fetch(`${this.apiUrl}${url}${query}`, {
        method,
        headers: requestHeaders,
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (response.ok) {
        return data;
      }

      throw new Error(data?.detail || response.statusText);
    } catch (e) {
      if (e instanceof Error) {
        console.log("[ERROR]: ", e.message);
      }
      throw e;
    }
  }
}
