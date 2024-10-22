const Car = require('../models/car');

async function getAllCars() {
    return await Car.find();
}

async function getCarById(id) {
    return await Car.findById(id);
}

async function createCar(carData) {
    const car = new Car(carData);
    return await car.save();
}

async function updateCar(id, updateData) {
    return await Car.findByIdAndUpdate(id, updateData, { new: true });
}

async function deleteCar(id) {
    return await Car.findByIdAndDelete(id);
}

module.exports = { getAllCars, getCarById, createCar, updateCar, deleteCar };
