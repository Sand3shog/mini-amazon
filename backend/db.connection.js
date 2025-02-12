import mongoose from "mongoose";
const dbConnect = async() => {
    try {
        const url = "mongodb+srv://sandeshmaharzan5:sandesh08@sandesh.5wg9e.mongodb.net/College-user?retryWrites=true&w=majority&appName=sandesh";
        await mongoose.connect(url);
        console.log("DB connection successful..");
    } catch (error) {
        console.log('Db connection failed...');
        console.log(error.message);
    }
};

export default dbConnect;
