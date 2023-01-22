import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import ProductRoute from './routes/ProductRoute.js'

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(ProductRoute);

app.get("/", (req, res) => {
    res.send("server running up")
});

app.listen(process.env.APP_PORT, () => {
    console.log("Server running...");
});

