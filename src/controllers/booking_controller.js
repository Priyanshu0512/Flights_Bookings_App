const {BookingService} = require('../services')
const {SuccessResponse,ErrorResponse } = require('../utils/common')
const {StatusCodes} = require('http-status-codes')


async function createBooking(req,res){
    try {
      const flight = await BookingService.createBooking({
        flightId: req.body.flightId,
        userId: req.body.userId,
        noOfSeats: req.body.noOfSeats
      }
      )
      SuccessResponse.message = "Successfully completed the booking in the Flight.";
      SuccessResponse.data= flight;
      return res
       .status(StatusCodes.OK)
       .json(SuccessResponse);
    } catch (error) {
      ErrorResponse.message = "Something went wrong";
      ErrorResponse.error = error;
      return res
       .status(error.statusCode)
       .json(ErrorResponse);
    }
  }

module.exports={
    createBooking

}