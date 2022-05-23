// const { response } = require("express")
const { default: mongoose } = require("mongoose");
const { Product } = require("./../models/product.model")

module.exports.testAPI = (req, res) => {
    res.json({
        message: "Backend Message"
    });
}

module.exports.allProducts = (req, res) => {
    Product.find({})
    .then(products => res.json(products))
    .catch(err => res.status(400).json(err))
}

module.exports.oneProduct = (req, res) => {
    Product.findOne({_id : req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => res.json(product))
        .catch(err => res.status(400).json(err));
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        {_id : req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id : req.params.id})
    .then(status => res.json(status))
    .catch(err => res.json(err))
}


