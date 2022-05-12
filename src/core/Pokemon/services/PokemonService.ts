import PokemonRepository from "../repositories/PokemonRepository";
import PokemonMapper from "../domain/pokemon.mapper";

const getAll = async () => {
  const pokemonsListDTO = await PokemonRepository.getAll();

  const pokemonsList = pokemonsListDTO.map((pokemon: any) => {
    return PokemonMapper.map(pokemon);
  });
  return pokemonsList;
};

const PokemonService = {
  getAll,
};

export default PokemonService;
