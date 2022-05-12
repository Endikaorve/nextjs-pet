import { ColorType } from "styles/theme/Colors";

export interface PokemonDTO {
  id: string;
  name: string;
  height: number;
  weight: number;
  types: {
    slot: number;
    type: {
      name: ColorType;
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
