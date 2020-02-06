'use strict';


module.exports = function(app){

    var genericController = require('../api/controllers/genericController')
    var countriesController = require('../api/controllers/countriesController')

    app.route('/generic')
    .get(genericController.genericResponse)

    app.route('/genericPost')
    .post(genericController.genericPost)

    app.route('/countriesall')
    .get(countriesController.all)
};