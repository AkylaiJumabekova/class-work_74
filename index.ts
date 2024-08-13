import express from "express";
import productsRouter from "./routers/products";
const app = express();
const port = 8001;


app.use(express.json());

app.use('/products', productsRouter);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})