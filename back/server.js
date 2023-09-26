import express from "express";
import http from "node:http";
import associationRoute from "./router/associationRoute.js";

const app = express();

// création d'un routeur
const router = express.Router();

// associer l'application au routeur
app.use(router);

router.use(express.json());

router.use("/association", associationRoute);

router.get("/", (req, res) => res.send("singore"));


const server = http.createServer(app);

export default server;
