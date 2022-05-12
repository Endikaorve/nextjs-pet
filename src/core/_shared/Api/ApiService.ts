const get = async (url: string) => {
  const response = await fetch(url);
  return response.json();
};

const ApiService = {
  get,
};

export default ApiService;
