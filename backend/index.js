import express from { express };
import dotenv from "dotenv"
import app from "./src/app";

dotenv.config()

const port = process.env.APP_PORT
const backendUrl = process.env.VITE_BACKEND_URL;


app
    .listen(port, () => {
        console.info(`Backend lancé sur:\n${backendUrl}`);
    })
    .on("error", (err) => {
        console.error("Error:", err.message);
    });
