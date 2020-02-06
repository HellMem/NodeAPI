'use strict';

const request = require("request");




exports.all = function(req, res){
    request.get("https://restcountries.eu/rest/v2/all", (error, response, body) => {
        if(error)
            res.send(error);
        //console.log(body);
        //res.json(body);

        JSON.parse(body).forEach(country => {
            console.log("Current name is: " +country.name);
        });
        res.send(body);
    })
};