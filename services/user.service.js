const { faker } = require('@faker-js/faker');

const boom = require('@hapi/boom');

class UserService {

  constructor(){
    this.users = [];
    this.generate();
  }

  generate() {
    const limit = 20;
    for (let index = 0; index < limit; index++) {
      this.users.push({
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        role: faker.person.bio(),
        job: faker.person.jobTitle(),
      });
    }
  }

  async create(data){
    const newUser = {
      id: faker.string.uuid(),
      ...data
    }
    this.users.push(newUser);
    return newUser;
  }

  async find(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.users);
      }, 2000);
    });
  }

  async findOne(id){
    const user = this.users.find(item => item.id === id);
    if (!user){
      throw boom.notFound('User not found');
    };
    return user;
  }

  async update(id, changes){
    const index = this.users.findIndex(item => item.id === id);
    if (index === -1){
      throw boom.notFound('User not found');
    };
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...changes
    };
    return this.users[index];
  }

  async delete(id){
    const index = this.users.findIndex(item => item.id === id);
    if (index === -1){
      throw boom.notFound('User not found');
    };
    this.users.splice(index, 1);
    return { id };
  }
}

module.exports = UserService;
