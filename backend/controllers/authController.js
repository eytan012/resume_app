const register = async (req, res) => {
	try {
		res.send(req.body);
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: "error.." });
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

export { login,updateUser,register };
