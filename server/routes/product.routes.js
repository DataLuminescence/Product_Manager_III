const ProductController = require(`../controllers/product.controller`)

module.exports = (app) => {
    // app.get('/api/test', ProductController.testAPI);
    app.get('/api/products', ProductController.allProducts)
    app.post('/api/products', ProductController.createProduct)

    app.get("/api/products/:id", ProductController.oneProduct)
    app.put("/api/products/:id", ProductController.updateProduct);
    app.delete("/api/products/:id", ProductController.deleteProduct);

}