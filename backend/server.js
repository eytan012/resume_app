import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

const app = express();
app.use(express.json());

if(process.env.NODE_ENV !== 'production'){
	app.use(morgan("dev"));

}
dotenv.config();

//DB
import connectDB from "./db/connect.js";

//routes
import authRouter from "./routes/authRoutes.js";
import jobRouter from "./routes/jobRoutes.js";
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobRouter);
app.get("/api", (req, res) => res.status(200).json({ msg: "good" }));

//middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleWare from "./middleware/error-handler.js";
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
