const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Get all bookings
router.get('/', bookingController.getAllBookings);

// Create a new booking
router.post('/', bookingController.createBooking);

// Update a booking by ID
router.put('/:id', bookingController.updateBooking);

// Cancel (delete) a booking by ID
router.delete('/:id', bookingController.cancelBooking);

module.exports = router;
