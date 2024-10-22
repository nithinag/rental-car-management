const bookingService = require('../services/bookingService');

// Create a new booking
async function createBooking(req, res) {
    try {
        const booking = await bookingService.createBooking(req.body);
        res.status(201).json(booking);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Get all bookings
async function getAllBookings(req, res) {
    try {
        const bookings = await bookingService.getAllBookings();
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Cancel (Delete) a booking
async function cancelBooking(req, res) {
    try {
        const deletedBooking = await bookingService.cancelBooking(req.params.id);
        if (!deletedBooking) {
            return res.status(404).json({ error: 'Booking not found' });
        }
        res.json({ message: 'Booking cancelled successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
// Update a booking by ID
async function updateBooking(req, res) {
    try {
        const updatedBooking = await bookingService.updateBooking(req.params.id, req.body);
        res.json(updatedBooking);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
module.exports = { createBooking, getAllBookings, cancelBooking,updateBooking };
