import express from "express";
import dotenv from "dotenv";
import stripe from "stripe";

dotenv.config();


const app = express;
app.use(express.static("public"));
app.use(express.json());
app.get("/", (req, res) => {
    res.sendfile("index.html", { root: "public" });
});
let StripeGateway = stripe(process.env.stripe_api);

app.listen(3000, () => {
    console.log("listening on port 3000;");
});