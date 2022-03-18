import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";

const app = express();
dotenv.config();

app.get('/test',(req,res)=>{
   throw new Error("test")
})



//middleware
import errorHandlerMiddleWare from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleWare);


const port = process.env.PORT || 5000;

const start = async () => {
	try {
		await connectDB(process.env.DB_URI);
		console.log("Connected to DB");
		app.listen(port, () => console.log(`Server is running on port ${port}`));
	} catch (error) {
		console.log("Connection error =>", error);
	}
};

start();
