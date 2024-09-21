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
    console.error("Error fetching Pokémon:", error);
    return null;
  }
}

async function getPokemonList() {
  const endpoint = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`;

  try {
    const response = await fetch(endpoint);
    const json = await response.json();
    return json.results;
  } catch (error) {
    console.error("Error fetching Pokémon list:", error);
    return [];
  }
}

export { getPokemon, getPokemonList };
