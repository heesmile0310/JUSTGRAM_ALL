import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

//controller 폴더에 있는 mainpage 함수 import 해옴
import { mainPage } from "./controllers/mainPage.js";

app.get("/", mainPage);

export { app };
