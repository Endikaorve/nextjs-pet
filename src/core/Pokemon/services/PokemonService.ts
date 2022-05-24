import PokemonApiRepository from "../repositories/PokemonApiRepository";
import PokemonMapper from "../domain/pokemon.mapper";
import { Pokemon } from "../domain/Pokemon";

const PokemonService = {
  getAll: async (): Promise<Pokemon[]> => {
    const pokemonsListDTO = await PokemonApiRepository.getAll();

    const pokemonsList = pokemonsListDTO.map((pokemon: any) => {
      return PokemonMapper.map(pokemon);
    });

    return pokemonsList;
  },

  getByName: async (name: string): Promise<Pokemon> => {
    const pokemonDTO = await PokemonApiRepository.getByName(name);
    const pokemon = PokemonMapper.map(pokemonDTO);

    return pokemon;
  },
};

export default PokemonService;
