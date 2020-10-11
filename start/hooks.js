const { hooks } = require('@adonisjs/ignitor')

hooks.after.providersBooted(() => {
  const Exception = use('Exception')
  /**
   * Redirect to login on invalid session exception
   */
  Exception.handle('InvalidSessionException', async (error, { response }) => {
    response.redirect('/admin/login')
    return
  })
})
