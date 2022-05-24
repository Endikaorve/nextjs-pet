export {};

describe("Navigation", () => {
  it("should navigate from home to pokemon details and back to home", () => {
    const pokemon = {
      id: 1,
      name: "bulbasaur",
    };

    cy.visit("http://localhost:3000/");

    cy.intercept({
      method: "GET",
      url: `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`,
    }).as("getAllPokemonsFirstPokemon");

    cy.wait("@getAllPokemonsFirstPokemon")
      .its("response.statusCode")
      .should("equal", 200);

    cy.get(`a[href*="details/${pokemon.name}"]`).click();

    cy.url().should("includes", `/details/${pokemon.name}`);

    cy.get("main").should("have.text", "Cargando...");

    cy.intercept({
      method: "GET",
      url: `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`,
    }).as("getPokemonDetails");

    cy.wait("@getPokemonDetails")
      .its("response.statusCode")
      .should("equal", 200);

    cy.get(`[alt="${pokemon.id}"]`).should("be.visible");

    cy.get('a[href*="/"]').click();

    cy.url().should("includes", "/");
  });
});
