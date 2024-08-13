import express from 'express';

const productsRouter = express.Router();

productsRouter.get("/products", (req, res) => {
    res.send("products will be here");
})

productsRouter.get("/products/:id", (req, res) => {
    res.send("product info:" + req.params.id);
})

productsRouter.post("/products", (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

export default productsRouter;