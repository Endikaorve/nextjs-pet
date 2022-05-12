import ApiService from "src/core/_shared/Api/ApiService";

const PokemonRepository = {
  getAll: async () => {
    const simplifiedPokemons = await ApiService.get(
      "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
    );

    return await Promise.all(
      simplifiedPokemons.results.map((p: any) => {
        return ApiService.get(p.url);
      })
    );
  },
};

export default PokemonRepository;
