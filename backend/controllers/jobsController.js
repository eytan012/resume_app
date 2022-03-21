const createJob = async (req, res) => {
	try {
		res.send("createJob");
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: "error.." });
	}
};

const deleteJob = async (req, res) => {
	try {
		res.send("deleteJob");
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: "error.." });
	}
};

const getAllJobs = async (req, res) => {
	try {
		res.send("getAllJobs");
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: "error.." });
	}
};

const updateJob = async (req, res) => {
	try {
		res.send("updateJob");
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: "error.." });
	}
};

const showStats = async (req, res) => {
	try {
		res.send("showStats");
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: "error.." });
	}
};
export { createJob, deleteJob, getAllJobs, showStats, updateJob };
