import express from 'express';

const productsRouter = express.Router();

productsRouter.get("/", (req, res) => {
    res.send("products will be here");
})

productsRouter.get("/:id", (req, res) => {
    res.send("product info:" + req.params.id);
})

productsRouter.post("/", (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

export default productsRouter;