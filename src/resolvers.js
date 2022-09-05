const resolvers = {
  Query: {
    randomCocktail: async (_, __,{ dataSources }) => {
      try {
        const { drinks } = await dataSources.drinkAPI.getRandomDrink();
        
        const { idDrink, strDrink, strAlcoholic, strDrinkThumb } = drinks[0];

        return {
          idDrink,
          strDrink,
          isAlcoholic: strAlcoholic,
          strDrinkThumb,
        }
      }catch (error) {
        console.log(error)
      }
    },
    searchByIngredientName: async (_, { ingredientName }, { dataSources }) => {
      try {
        const { drinks } = await dataSources.drinkAPI.searchByIngredientName(ingredientName);
        
        return drinks;
      } catch (error) {
        console.log(error)
      }
    },
    searchByAlchoolicOrNon: async (_, { isAlcoholicOrNon }, { dataSources }) => {
      try{
        const { drinks } = await dataSources.drinkAPI.getByAlchoolicOrNon(isAlcoholicOrNon)

        return drinks
      }catch(error){
        console.log(error)
      }

    }
  },
};

module.exports = resolvers;