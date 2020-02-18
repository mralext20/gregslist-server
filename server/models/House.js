import mongoose from "mongoose";
const Schema = mongoose.Schema;

const House = new Schema(
  {
    bedrooms: { type: Number, required: true },
    year: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    description: { type: String, required: true },
    levels: { type: String, required: true },
    price: { type: Number, required: true },
    imgUrl: { type: String, default: "" }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);


export default House;