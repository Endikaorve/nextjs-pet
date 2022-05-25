import unfetch from "isomorphic-unfetch";

const get = async (url: string) => {
  const response = await unfetch(url);
  return response.json();
};

const ApiService = {
  get,
};

export default ApiService;
