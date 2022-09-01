const { gql } = require("apollo-server");

const typeDefs = gql`

  type Cocktail {
    idDrink: String
    drinkName: String
    isAlcoholic: String
    drinkThumb: String
  }

  type Query {
    randomCocktail: Cocktail

    searchByIngredientName(ingredientName: String): [Cocktail]
  }

`;

module.exports = typeDefs;