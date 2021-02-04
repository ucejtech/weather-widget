import Axios from "axios";

const instance = ({ url, token }: Record<string, string>) =>
  Axios.create({
    baseURL: url,
    timeout: 50000,
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

export default instance;
