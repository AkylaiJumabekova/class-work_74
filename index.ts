import express from "express";
const app = express();
const port = 8001;


app.use(express.json());


app.get("/products", (req, res) => {
    res.send("products will be here");
})

app.get("/products/:id", (req, res) => {
    res.send("product info:" + req.params.id);
})

app.post("/products", (req, res) => {
    console.log(req.body);
    res.send(req.body);
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})