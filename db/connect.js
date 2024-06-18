const mongoose = require("mongoose");

const connectDb = (url) => {
	return mongoose.connect(url).then(() => {
		console.log("connect to mongoose");
	});
};

module.exports = connectDb;
