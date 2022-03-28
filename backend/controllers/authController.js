import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
const register = async (req, res, next) => {
	const { name, email, password } = req.body;
	try {
		if (!name || !password || !email) {
			next({ message: "Please fill up all fields" });
			return;
		}
		const isEmailExists = await User.findOne({ email });
		if (isEmailExists) {
			next({ message: "Email already in use" });
			return;
		}
		const user = await User.create(req.body);
		const token = await user.createJWT(); // custom method from USER_MODEL
		user.password = null;
		res.status(StatusCodes.OK).json({ user, token });
	} catch (error) {
		console.log('catch block');
		next(error);
	}
};

const login = async (req, res) => {
	try {
		res.send("login");
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: "error.." });
	}
};

const updateUser = async (req, res) => {
	try {
		res.send("update");
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: "error.." });
	}
};

export { login, updateUser, register };
