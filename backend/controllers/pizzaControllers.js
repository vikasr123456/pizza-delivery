import catchAsycError from "../middleware/catchAsycError.js";
import custompizzamodel from "../models/custompizzamodel.js";
import pizza from "../models/pizza.js";

export const getProducts = async (req, res) => {
  res.status(200).json({
    message: "All Products",
  });
};

export const createNewPizza = catchAsycError(async (req, res) => {
  const { name, description, image, price, categorySize,isVeg } = req.body;
  const newPizza = await pizza.create({
    name,
    description,
    image,
    price,
    categorySize,
    isVeg,
  });
  res.status(201).json({
    success: true,
    newPizza,
  });
}
);

export const getAllPizza = catchAsycError(async (req, res) => {
  const allPizza = await pizza.find();
  res.status(200).json({
    success: true,
    allPizza,
  });
}
);

export const getPizzaById = catchAsycError(async (req, res) => {
  const singlePizza = await pizza.findById(req.params.id);
  res.status(200).json({
    success: true,
    singlePizza,
  });
}
);

export const updatePizza = catchAsycError(async (req, res) => {
  const data = { 
    name : req.body.name , 
    description : req.body.description ,
    image : req.body.image ,
    price : req.body.price ,
    categorySize : req.body.categorySize ,
    isVeg : req.body.isVeg };
  const updatePizza = await pizza.findByIdAndUpdate(req.params.id, data ,{new:true});
  res.status(200).json({
    success: true,
    updatePizza,
  });
}
); 

export const deletePizza = catchAsycError(async (req, res) => {
  const deletePizza = await pizza.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: true,
    deletePizza,
  });
}
);

export  const createCustomPizza = catchAsycError(async (req, res) => {
  const { name, baseSize , sauceType, cheeseType,toppings } = req.body;
  const newPizza = await custompizzamodel.create({
    name,
    baseSize,
    sauceType,
    cheeseType,
    toppings,
  });
  res.status(201).json({
    success: true,
    newPizza,
  });
}
);


