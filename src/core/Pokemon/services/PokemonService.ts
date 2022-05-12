import PokemonRepository from "../repositories/PokemonRepository";
import PokemonMapper from "../domain/pokemon.mapper";

const PokemonService = {
  getAll: async () => {
    const pokemonsListDTO = await PokemonRepository.getAll();

    const pokemonsList = pokemonsListDTO.map((pokemon: any) => {
      return PokemonMapper.map(pokemon);
    });

    return pokemonsList;
  },

  getByName: async (name: string) => {
    const pokemonDTO = await PokemonRepository.getByName(name);
    const pokemon = PokemonMapper.map(pokemonDTO);

    return pokemon;
  },
};

export default PokemonService;
