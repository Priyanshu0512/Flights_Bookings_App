const CrudRepository = require('./crud_repository');
const {Booking} = require('../models');


class BookingRepository extends CrudRepository{
    constructor(){
        super(Booking);
    }

    async createBooking(data, transaction) {
        const response = await Booking.create(data, {transaction: transaction});
        return response;
    } 
}

module.exports =BookingRepository;