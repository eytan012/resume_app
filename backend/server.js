import express from "express";
import dotenv from 'dotenv'
import errorHandlerMiddleWare from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";

const app = express();
dotenv.config();

app.get("/", (req, res) => {
	throw new Error("error");
});



//middleware
app.use(errorHandlerMiddleWare);
app.use(notFoundMiddleware);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
