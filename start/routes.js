'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
// Session
Route.get("/admin/login", "AuthController.getLogin");
Route.post("/admin/login", "AuthController.postLogin");
Route.get("/admin/logout", "AuthController.getLogout");

Route.group('admin', () => {
  Route.get('/admin', 'AdminController.getIndex');
  Route.post('/admin/positions', 'AdminController.postPosition');
}).middleware(['auth']);
