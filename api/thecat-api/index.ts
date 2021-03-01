import axios, { AxiosRequestConfig } from "axios";

const baseURL = "https://api.thecatapi.com/v1";
const API_KEY = "131d893e-9d8c-4f7b-83e4-947e40c8c617";
const GET_REQUEST_SETTINGS: AxiosRequestConfig = {
  baseURL,
  headers: {
    "x-api-key": API_KEY,
  },
  method: "GET",
};

interface GetRequestProps {
  // path must be ex. /images/search
  path: string;
  params?: object;
  headers?: object;
}

// Main function to make get requests to our api
export const get = async ({ path, params, headers }: GetRequestProps) => {
  const request = axios.create(GET_REQUEST_SETTINGS);

  const response = await request(path, { params, headers });

  return response;
};

export const getCatBreeds = async () => {
  const requestParams = { path: "/breeds" };
  const response = await get(requestParams);

  return response;
};
