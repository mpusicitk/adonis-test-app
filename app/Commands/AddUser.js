'use strict'

const { Command } = require('@adonisjs/ace')
const User = use("App/Models/User");
const Database = use('Database')

class AddUser extends Command {
  static get signature () {
    return 'add:user'
  }

  static get description () {
    return 'Add admin user for admin panel'
  }

  async handle () {
    const username = await this
      .ask('Enter username');
    const email = await this
      .ask('Enter user email');
    const password = await this
      .secure('Enter user password');
    const passwordConfirm = await this
      .secure('Confirm password');
    if (password === passwordConfirm) {
      const confirm = await this
        .confirm(`Are you sure you want to add user with email: ${email}`);
      if (confirm) {
        const data = {
          username: username,
          email: email,
          password: password
        }

        const user = await this.createUser(data);

        this.info(`User created sucessfully with username ${user.username} and email ${user.email}`);
        Database.close();
      }
    } else {
      this.info('Passwords didnt match');
    }
  }

  async createUser(data) {
    const user = await User.create(data);

    return user;
  }
}

module.exports = AddUser
