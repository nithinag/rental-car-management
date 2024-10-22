const Booking = require('../models/booking');
const Car = require('../models/car');

async function createBooking(bookingData) {
    const car = await Car.findById(bookingData.carId);
    if (car.status !== 'available') throw new Error('Car is not available');

    const booking = new Booking(bookingData);
    await booking.save();
    
    car.status = 'rented';
    await car.save();
    
    return booking;
}

async function getAllBookings() {
    return await Booking.find().populate('carId');
}

async function cancelBooking(id) {
    const booking = await Booking.findById(id);
    const car = await Car.findById(booking.carId);

    car.status = 'available';
    await car.save();
    return await Booking.findByIdAndDelete(id);
}

async function updateBooking(id, updateData) {
    const booking = await Booking.findById(id);
    if (!booking) throw new Error('Booking not found');

    // Optional: Check if the car status or date range needs adjustments
    if (updateData.carId) {
        const car = await Car.findById(updateData.carId);
        if (!car || car.status !== 'available') {
            throw new Error('Selected car is not available');
        }
        booking.carId = updateData.carId;
    }

    if (updateData.startDate) booking.startDate = new Date(updateData.startDate);
    if (updateData.endDate) booking.endDate = new Date(updateData.endDate);
    if (updateData.customerName) booking.customerName = updateData.customerName;
    if (updateData.totalPrice) booking.totalPrice = updateData.totalPrice;

    await booking.save();
    return booking;
}

module.exports = { createBooking, getAllBookings, cancelBooking,updateBooking };
