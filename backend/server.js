import express from "express";
import notFoundMiddleware from "./middleware/not-found.js";

const app = express();

//middleware
app.use(notFoundMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
