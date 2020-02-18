import express from "express";
import CarService from "../services/CarService";


export default class CarsController {
  constructor() {
    this.router = express
      .Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("", this.getAll)
      .get("/:id", this.getById)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }

  async getAll(req, res, next) {
    try {
      let data = await CarService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await CarService.getById(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let data = await CarService.create(req.body)
      return res.status(201).send(data)
    } catch (error) {
      next(error)
    }

  }
  async edit(req, res, next) {
    try {
      let data = await CarService.edit(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      let data = await CarService.delete(req.params.id)
      return res.send("Deleted!")
    } catch (error) {
      next(error)
    }
  }
}
