import axios, { AxiosInstance } from "axios";

export const http: AxiosInstance = axios.create();

class HttpService {
  constructor(private readonly http: AxiosInstance) {}

  public async get<T, U>(
    url: string,
    params?: { [param: string]: U }
  ): Promise<T> {
    const response = await this.http.get(url, { params });

    return response.data;
  }

  public async post<T, U>(url: string, data: U): Promise<T> {
    const response = await this.http.post(url, data);

    return response.data;
  }

  public async put<T, U>(url: string, data: U): Promise<T> {
    const response = await this.http.put(url, data);

    return response.data;
  }

  public async delete<T = void>(url: string): Promise<T> {
    const response = await this.http.delete(url);

    return response.data;
  }
}

export const httpService = new HttpService(http);
