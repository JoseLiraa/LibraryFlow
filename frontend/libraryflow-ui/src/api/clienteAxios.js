import axios from "axios";

const clienteAxios = axios.create({
  baseURL: "https://localhost:5001/api", // tu API
  headers: {
    "Content-Type": "application/json"
  }
});

export default clienteAxios;