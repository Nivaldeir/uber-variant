import HttClient from "./HttpClient";

export default class FetchAdapter implements HttClient {
  async get(url: string): Promise<any> {
    const response = await fetch(url);
    return response.json()
  }
  async post(url: string, body: any): Promise<any> {
    const response = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    return response.json();
  }
}