'use strict';

var request = require("request");

const geocode = (address, callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZWxtZW1lIiwiYSI6ImNrM3FnZ2l5MzAxZzUzZG51YTB4MGlsaXMifQ.GKvxKp5AAaA8w8UXhqC2Dg&limit=1'

    request({url : url, json : true}, (error, response)=>{
        if(error){
            callback('Unable to connect to location services!!')
        }else if(response.body.features.length == 0){
            callback('Unable to find location. Try another search.')
        }else{
            const center = response.body.features[0].center
            callback(undefined, {
                latitude : center[0],
                longitude : center[1]
            })
        }
    })
}


module.exports = geocode