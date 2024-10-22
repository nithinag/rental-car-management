const carService = require('../services/carService');

// Get all cars
async function getAllCars(req, res) {
    try {
        const cars = await carService.getAllCars();
        res.json(cars);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Create a new car
async function createCar(req, res) {
    try {
        const car = await carService.createCar(req.body);
        res.status(201).json(car);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Update car details
async function updateCar(req, res) {
    try {
        const updatedCar = await carService.updateCar(req.params.id, req.body);
        if (!updatedCar) {
            return res.status(404).json({ error: 'Car not found' });
        }
        res.json(updatedCar);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Delete a car
async function deleteCar(req, res) {
    try {
        const deletedCar = await carService.deleteCar(req.params.id);
        if (!deletedCar) {
            return res.status(404).json({ error: 'Car not found' });
        }
        res.json({ message: 'Car deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { getAllCars, createCar, updateCar, deleteCar };
