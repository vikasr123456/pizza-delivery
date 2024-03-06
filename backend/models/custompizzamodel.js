import { Schema, model } from "mongoose";
const customPizzaSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,    },
    baseSize: {
      type: String,
      required: true,
    },
    sauceType: {
      type: String,
      required: true,
    },
    cheeseType: {
      type: String,
      required: true,
    },
    toppings: {
      type: Array,
    },
  },
  { timestamps: true }
);


export default model("CustomPizza", customPizzaSchema);