import mongoose from "mongoose";
const Schema = mongoose.Schema;

const car = new Schema(
  {
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imgUrl: { type: String, default: "" }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);


export default car;
