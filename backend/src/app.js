import express from "express";
import router from "./router";

const app = express();

app.get("/", (req, res) => {
  res.send("/api/votre_url \n\n Pour commencer !");
});

app.use("/api", router);

export default app;
