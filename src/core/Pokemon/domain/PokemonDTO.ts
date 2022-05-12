export interface PokemonDTO {
  id: string;
  name: string;
  height: number;
  weight: number;
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
      dream_world: {
        front_default: string;
      };
    };
  };
}
