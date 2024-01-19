const CrudRepository = require('./crud_repository');
const {Booking} = require('../models');
const { transport } = require('winston');


class BookingRepository extends CrudRepository{
    constructor(){
        super(Booking);
    }

    async createBooking(data, transaction) {
        const response = await Booking.create(data, {transaction: transaction});
        return response;
    } 

    async get(data, transaction){
        const  response= await Booking.findByPk(data,{transaction: transaction});
        if(!response){
            throw new AppError("Cannot find the resource",StatusCodes.NOT_FOUND);
        }
        return response;
    }
    async update(id , data, transaction){
        const  response= await this.model.update(data,{
            where: {
                id: id
            }
        },{transaction: transaction});
        if(!response[0]){
            throw new AppError("Cannot find the resource",StatusCodes.NOT_FOUND);
        }
        return response;
    }
}

module.exports =BookingRepository;