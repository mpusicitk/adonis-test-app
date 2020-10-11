'use strict'

class AuthController {
  getLogin({ view }) {
    return view.render("login");
  }

  async postLogin({ auth, request, response, session }) {
    const { email, password } = request.all();

    try {
      await auth.attempt(email, password);
    } catch (e) {
      session.flashExcept(["password"]);

      session.flash({
        error: "We cannot find any account with these credentials.",
      });

      return response.redirect("/admin/login");
    }

    session.flash({ notification: "Logged in successfully" });
    return response.redirect("/admin");
  }

  async getLogout({ auth, response }) {
    await auth.logout()

    return response.redirect("/admin/login");
  }
}

module.exports = AuthController
