import express from "express";
const app = express();
const port = 8001;

app.get("/products", (req, res) => {
    res.send("products will be here");
})

app.get("/products/:id", (req, res) => {
    res.send("product info:" + req.params.id);
})

app.post("/products", (req, res) => {
    res.send("product created");
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})