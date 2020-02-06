'use strict';

var request = require("request");

const forecast = (latitude, longitude, callback)=>{

    const url = 'https://api.darksky.net/forecast/93a314caa1069f03e13dd6c02cbbadf0/' + latitude + ',' + longitude +'?units=si'

    request({ url : url, json : true}, (error, response)=> {

        if(error){
            callback('Unable to connect to weather service!!')
        }else if(response.body.error){
            callback('Unable to find location')
        }else{
            const temperature = response.body.currently.temperature
            const precipProbability = response.body.currently.precipProbability
            
            callback(undefined, "It is currently " + temperature + " degrees out. There is a " + precipProbability + " chance of rain.")        
        }
    })
}


module.exports = forecast