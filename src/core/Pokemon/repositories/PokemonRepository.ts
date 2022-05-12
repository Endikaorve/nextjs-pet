import ApiService from "src/core/_shared/Api/ApiService";

const url = "https://pokeapi.co/api/v2";

const PokemonRepository = {
  getAll: async () => {
    const simplifiedPokemons = await ApiService.get(
      `${url}/pokemon?limit=20&offset=0`
    );

    return await Promise.all(
      simplifiedPokemons.results.map((p: any) => {
        return ApiService.get(p.url);
      })
    );
  },

  getByName: async (id: string) => {
    return ApiService.get(`${url}/pokemon/${id}`);
  },
};

export default PokemonRepository;
