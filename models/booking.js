const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    carId: { type: mongoose.Schema.Types.ObjectId, ref: 'Car' },
    customerName: String,
    startDate: Date,
    endDate: Date,
    totalPrice: Number,
});

module.exports = mongoose.model('Booking', bookingSchema);
