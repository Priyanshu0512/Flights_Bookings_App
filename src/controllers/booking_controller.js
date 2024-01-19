const {BookingService} = require('../services')
const {SuccessResponse,ErrorResponse } = require('../utils/common')
const {StatusCodes} = require('http-status-codes')


async function createBooking(req,res){
    try {
      const response = await BookingService.createBooking({
        flightId: req.body.flightId,
        userId: req.body.userId,
        noOfSeat: req.body.noOfSeat
      }
      )
      SuccessResponse.message = "Successfully completed the booking in the Flight.";
      SuccessResponse.data= response;
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


  async function makePayment(req,res){
    try {
      const response = await BookingService.makePayment({
        totalCost: req.body.totalCost,
        bookingId: req.body.bookingId,
        userId: req.body.userId
      }
      )
      SuccessResponse.message = "Successfully completed the payment for the booking.";
      SuccessResponse.data= response;
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
    createBooking,
    makePayment

}