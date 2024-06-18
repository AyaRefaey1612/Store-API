require("dotenv").config();
const connectDb = require("./db/connect");
const schema = require("./models/product");
const jsonProduct = require("./products.json");

const start = async () => {
	try {
		await connectDb(process.env.MONGO_URI);
		await schema.deleteMany();
		await schema.create(jsonProduct);
		console.log("connected db");
		process.exit(0);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

start();
