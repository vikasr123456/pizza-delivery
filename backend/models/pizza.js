import { Schema, model } from "mongoose";
const PizzaSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      default: "Pizza Name",
    },
    description: {
      type: String,
      required: true,
      default: "Pizza Description",
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    categorySize:{
      type:String,
      required:true,
      default:"Small" 
    },
    image: {
      type: String,
      required: false,
    },
    isVeg: {
      type: Boolean,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Pizza", PizzaSchema);