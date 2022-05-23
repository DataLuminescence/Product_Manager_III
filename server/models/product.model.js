const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: [true, "Title is required"], 
        minlength: [8, "Title must be at least 8 characters"]
    },
    price: { 
        type: Number, 
        required: [true, "Price is required"],
        min: [0, "Number must be greater than 0"] 
    },
    description: { 
        type: String, 
        required: [true, "Description is required"],
        minlength: [15, "Number must be at least 15 characters"]
    }
}, { timestamps: true });

module.exports.Product = mongoose.model('Product', ProductSchema);