const { gql } = require("apollo-server");

const typeDefs = gql`

  type Cocktail {
    idDrink: String
    strDrink: String
    strDrinkThumb: String
  }

  type Query {
    randomCocktail: RandomCocktail
    searchByIngredientName(ingredientName: String): [Cocktail]
    searchByAlchoolicOrNon(isAlcoholicOrNon: String): [Cocktail]
  }

  type RandomCocktail { 
    idDrink: String,
    strDrink: String,
    isAlcoholic: String,
    strDrinkThumb: String,
  }

`;

module.exports = typeDefs;