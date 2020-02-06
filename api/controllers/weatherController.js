'use strict';


const geocode = require('../../utils/geocode')
const forecast = require('../../utils/forecast')


geocode('Guadalajara', (error, data)=>{
    if(error){
        console.log(error)
    }else{
        forecast(data.longitude,data.latitude, (error, data)=>{
            if(error){
                console.log(error)
            }else{
                console.log(data)
            }
        })
    }
})

