import axios from "axios";

const clienteAxios = axios.create({
  baseURL: "https://localhost:7137/api", //url base de la api
  headers: {
    "Content-Type": "application/json"  //informacion que recibe de tipo json
  }
});

export default clienteAxios;