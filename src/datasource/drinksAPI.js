const { RESTDataSource } = require('apollo-datasource-rest');

class DrinkAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/'
  }

  async getRandomDrink() {
    return this.get('random.php')
  }

  async getByName(name) {
    return this.get(`search.php?s=${name}`);
  }

  async getByFirstLetter(firstLetter) {
    return this.get(`search.php?f=${firstLetter}`);
  }

  async searchByIngredientName(ingredient) {
    return this.get(`filter.php?i=${ingredient}`);
  }

  async getDrinkDetails(id) {
    return this.get(`lookup.php?i=${id}`)
  }
}

module.exports = DrinkAPI;