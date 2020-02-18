import mongoose from "mongoose";
import Car from "../models/Car";

const _repository = mongoose.model("Cars", Car);

class CarsService {
  async edit(id, update) {
    return await _repository.findByIdAndUpdate(id, update, { new: true })
  }
  async delete(id) {
    await _repository.findByIdAndDelete(id)
  }
  async getById(id) {
    return await _repository.findById(id)
  }
  async getAll() {
    return await _repository.find({});
  }
  async create(rawData) {

    return await _repository.create(rawData)

  }
}

const CarService = new CarsService();
export default CarService;
