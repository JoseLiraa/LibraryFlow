import axios, { AxiosInstance } from "axios";

const clienteAxios: AxiosInstance = axios.create({
  baseURL: "https://localhost:7137/api", //url base de la api
  headers: {
    "Content-Type": "application/json"  //informacion enviada tipo json
  }
});

export default clienteAxios;