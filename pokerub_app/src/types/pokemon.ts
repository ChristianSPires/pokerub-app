type PokemonType = {
  id: number | string;
  name: string;
  types: Array<{ slot: number; type: { name: string; url: string } }>;
  height: number;
  weight: number;
  abilities: Array<{ ability: { name: string; url: string } }>;
  sprites: { front_default: string };
  category: string;
};

type PokemonResponseType = {
  name: string;
  url: string;
};

export { PokemonType, PokemonResponseType };
