import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import services from "./service/AppService.js";
import express from "express";
import morgan from "morgan";
const app = express();
const logger = morgan("short");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger);
services(app);
const server = http.createServer(app);
const port = process.env.PORT || 9000;
server.listen(port, console.log(`Server running on ${port} port`));
