type PokemonType = {
  id: number | string;
  name: string;
  species: { name: string };
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

type PokemonEvolutionChainType = {
  species: string;
  evolves_to: string;
};

export { PokemonType, PokemonResponseType, PokemonEvolutionChainType };
