'use strict'

const Position = use("App/Models/Position");

class AdminController {
  async getIndex({ view }) {
    const positions = await Position.all();

    return view.render('admin', {positions: positions.rows});
  }

  async postPosition({ request, session }) {
    const { title, text } = request.all();
    const data = {
      title: title,
      text: text
    };
    try {
      const position = await Position.create(data);

      session.flash({
        notification: "Position added",
      });

      return
    } catch (e) {
      session.flash({
        error: "Something went wrong",
      });

      return
    }
  }
}

module.exports = AdminController
