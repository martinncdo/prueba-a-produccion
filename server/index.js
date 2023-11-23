import 'dotenv/config';
import express from "express";
import cors from "cors";
import paymentRoutes from "./routes/payment.routes.js";
import morgan from "morgan";
import path from "path";

const app = express();

// Proxy.
app.use(morgan("dev"));
app.use(cors({
    origin: process.env.DOMAIN_FRONTEND
}));

app.use(paymentRoutes);
app.use(express.static(path.resolve("client")))

app.listen(process.env.PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${process.env.PORT}`);
});