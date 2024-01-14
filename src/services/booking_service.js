const axios = require('axios');
const { StatusCodes } = require("http-status-codes");
const AppError = require('../utils/errors/app-error');

const BookingRepository = require('../repositories');
const {Serverconfig} = require('../config')
const db= require('../models')

async function createBooking(data){
    return new Promise((resolve,reject)=>{
            const result =db.sequelize.transaction(async function bookingImp(t){
                const flight =  await axios.get(`${Serverconfig.FLIGHT_SERVICE}/api/v1/flights/${data.flightId}`);
                if(data.noOfSeats > flight.data.data.totalSeats){
                    reject(new AppError('Not enough seats available', StatusCodes.BAD_REQUEST));
                }
                 resolve(true)
            });

    })
    
}

module.exports ={
    createBooking
}