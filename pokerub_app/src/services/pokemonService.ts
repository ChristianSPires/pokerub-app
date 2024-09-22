async function getPokemon(id: number | string) {
  const pokemonEndpoint = `https://pokeapi.co/api/v2/pokemon/${id}/`;
  const speciesEndpoint = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;

  try {
    const pokemonResponse = await fetch(pokemonEndpoint);
    const pokemonData = await pokemonResponse.json();
    const speciesResponse = await fetch(speciesEndpoint);
    const speciesData = await speciesResponse.json();
    const category = speciesData.genera.find(
      (genus: { language: { name: string } }) => genus.language.name === "en"
    ).genus;

    return { ...pokemonData, category };
  } catch (error) {
    return null;
  }
}

async function getPokemonList(paginationEndpoint: string | undefined) {
  let endpoint = paginationEndpoint
    ? paginationEndpoint
    : "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

  try {
    const response = await fetch(endpoint);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error fetching Pokémon list:", error);
    return [];
  }
}

async function getPokemonEvolutionChain(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch evolution chain: ${response.statusText}`
      );
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching Pokémon Evolution Chain:", error);
    return null;
  }
}

async function getPokemonImage(pokemonName: string) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const data = await response.json();
    return data.sprites.front_default;
  } catch (error) {
    console.error("Error fetching Pokémon Image:", error);
    return null;
  }
}

async function getPokemonSpecies(id: number | string) {
  const speciesEndpoint = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;

  try {
    const speciesResponse = await fetch(speciesEndpoint);
    const speciesData = await speciesResponse.json();
    return speciesData;
  } catch (error) {
    console.error("Error fetching Pokémon Species:", error);
    return null;
  }
}

export {
  getPokemon,
  getPokemonList,
  getPokemonEvolutionChain,
  getPokemonImage,
  getPokemonSpecies,
};
