const { faker } = require('@faker-js/faker');

class CategoryService {
  constructor(){
    this.categories = [
      {
        id: '1',
        name: 'Electronics',
        image: faker.image.url(),
      },
      {
        id: '2',
        name: 'Clothes',
        image: faker.image.url(),
      },
      {
        id: '3',
        name: 'Shoes',
        image: faker.image.url(),
      },
      {
        id: '4',
        name: 'Books',
        image: faker.image.url(),
      },
      {
        id: '5',
        name: 'Food',
        image: faker.image.url(),
      },
      {
        id: '6',
        name: 'Drinks',
        image: faker.image.url(),
      },
      {
        id: '7',
        name: 'Jewerly',
        image: faker.image.url(),
      },
    ];
  }

  async create(data) {
    const newCategory = {
      ...data
    }
    this.categories.push(newCategory);
    return newCategory;
  }

  async find() {
    return this.categories;
  }

  async findOne(id) {
    return this.categories.find(category => category.id === id);
  }

  async update(id, changes) {
    const index = this.categories.findIndex(category => category.id === id);
    if (index !== -1) {
      this.categories[index] = { ...this.categories[index], ...changes };
      return { id, changes };
    }
    return null;
  }

  async delete(id) {
    const index = this.categories.findIndex(category => category.id === id);
    if (index !== -1) {
      this.categories.splice(index, 1);
      return { id };
    }
    return null;
  }
}

module.exports = CategoryService;
