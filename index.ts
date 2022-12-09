import { AppDataSource } from "./src/data-source";
// import { PhoneBook } from "./src/entity/PhoneBook";
import multer from 'multer';
const upload = multer();
import express from "express";
import bodyParser from 'body-parser';
const PORT = 3000;
import morgan from "morgan";


const app = express();

app.use(bodyParser.json());
app.use(morgan("combined"))
app.get('/', (req, res) => {
 res.json({
 message: "Hello Stranger! How are you?",
 });
})

app.listen(PORT, () => {
 console.log("App running on port: " + PORT)
})


  


