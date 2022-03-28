import { StatusCodes } from "http-status-codes";
const errorHandlerMiddleWare = (err, req, res, next) => {
	console.log("Error handler: ", err);
	console.log('CHECK IF WE HAVE ERROR.NAME===>>: ',err.name);
	console.log('CHECK IF WE HAVE ERROR.MESSAGE===>>: ',err.message);
	const defaultError = {
		statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
		msg: err.message || "Something went wrong",
	};
	if (err.code && err.code === 11000) {
		defaultError.statusCode = StatusCodes.BAD_REQUEST;
		defaultError.msg = `${Object.keys(err.keyValue)} field has to be unique`;
	}
	if (err.name === "ValidationError") {
		defaultError.statusCode = StatusCodes.BAD_REQUEST;
		defaultError.msg = err.message;
	}

	res.status(defaultError.statusCode).json({ msg: defaultError.msg });
};

export default errorHandlerMiddleWare;
