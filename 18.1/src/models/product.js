const mongoose = require("mongoose");
const validator = require("validator");


const Product = mongoose.model("Product", {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
    },
    details: {
      description: {
        type: String,
        required: true,
        minLength: 10,
      },
      Price: {
        type: Number,
        validate(value) {
          if (value < 0) throw new Error("Price most be positive number");
        },
        required: true,
      },
      discount: {
        type: Number,
        default: 0,
      },
      
    },
  });

module.exports= Product;