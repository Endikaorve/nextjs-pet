import PokemonApiRepository from "../repositories/PokemonApiRepository";
import PokemonMapper from "../domain/pokemon.mapper";

const PokemonService = {
  getAll: async () => {
    const pokemonsListDTO = await PokemonApiRepository.getAll();

    const pokemonsList = pokemonsListDTO.map((pokemon: any) => {
      return PokemonMapper.map(pokemon);
    });

    return pokemonsList;
  },

  getByName: async (name: string) => {
    const pokemonDTO = await PokemonApiRepository.getByName(name);
    const pokemon = PokemonMapper.map(pokemonDTO);

    return pokemon;
  },
};

export default PokemonService;
