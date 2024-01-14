const express = require('express');

const router=express.Router();

const {info_controller} = require('../../controllers');
const bookingRoutes = require('./booking_routes')

router.get('/info',info_controller.info);
router.use('/bookings',bookingRoutes);

module.exports=router;
