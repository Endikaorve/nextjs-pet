import { PokemonDTO } from "./PokemonDTO";
import { Pokemon } from "./Pokemon";

const map = (pokemon: PokemonDTO): Pokemon => ({
  id: pokemon.id,
  name: pokemon.name,
  height: pokemon.height / 10,
  weight: pokemon.weight / 10,
  types: pokemon.types.map((typeContainer) => typeContainer.type.name),
  img: pokemon.sprites.other["official-artwork"].front_default,
  alt_img: pokemon.sprites.other.dream_world.front_default,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet facilisis mi. Integer eget urna eu mauris scelerisque ornare. Nam at finibus purus. Nam quis mauris elementum, ullamcorper sem non, convallis mi. Sed a bibendum sapien, non posuere ligula. Morbi sit amet maximus purus. Nulla eu pulvinar ante. Nulla gravida luctus convallis. Duis suscipit vel nisi et tincidunt. Aenean velit purus, rutrum euismod justo id, porta tincidunt orci. Curabitur quis nibh elit. Etiam ornare tortor ac nibh commodo dapibus. Proin vehicula erat sit amet lacus posuere tincidunt.",
});

const PokemonMapper = {
  map,
};

export default PokemonMapper;
