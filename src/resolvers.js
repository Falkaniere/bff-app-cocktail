const resolvers = {
  Query: {
    randomCocktail: async (_, __,{ dataSources }) => {
      try {
        const { drinks } = await dataSources.drinkAPI.getRandomDrink();
        
        const { idDrink, strDrink, strAlcoholic, strDrinkThumb } = drinks[0];

        return {
          idDrink,
          drinkName: strDrink,
          isAlcoholic: strAlcoholic,
          drinkThumb: strDrinkThumb,
        }
      } catch (error) {
        console.log(error)
      }
    },
    searchByIngredientName: async (_, { ingredientName }, { dataSources }) => {
      const response = await dataSources.drinkAPI.searchByIngredientName(ingredientName);
      console.log(response)
    }
  },
};

module.exports = resolvers;