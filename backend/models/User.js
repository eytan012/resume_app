import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please provide name"],
		minlength: 3,
		maxlength: 20,
		trim: true,
	},
	email: {
		type: String,
		required: [true, "Please provide email"],
		unique: true,
		validate: {
			validator: isEmail,
			message: "Please provide a valid email",
		},
	},
	password: {
		type: String,
		required: [true, "Please provide password"],
		minlength: 6,
	},
	lastName: {
		type: String,
		minlength: 3,
		maxlength: 20,
		trim: true,
	},
	location: {
		type: String,
		default: "my city",
	},
});
UserSchema.pre("save", async function (next) {
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
	next();
});

UserSchema.methods.createJWT = async function () {
	return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_LIFETIME,
	});
};

export default mongoose.model("User", UserSchema);
