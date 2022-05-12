import { ColorType } from "styles/theme/Colors";

export interface Pokemon {
  id: string;
  name: string;
  height: number;
  weight: number;
  types: ColorType[];
  img: string;
  altImg: string;
  description: string;
}
