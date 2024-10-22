const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    status: { type: String, enum: ['available', 'rented'], default: 'available' },
    pricePerDay: Number
});

module.exports = mongoose.model('Car', carSchema);
