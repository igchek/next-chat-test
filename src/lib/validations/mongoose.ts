import mongoose from "mongoose";

let isConnected = false

export  const connectToDB = async () => {
    if (!isConnected){
        console.log(`DB connection is already intact`)
        return;
    }
    mongoose.set("strictQuery", true);

    try {
        await mongoose.connect(process.env.MONGO_DB_CONNECTION as string);
        isConnected=true
    }
    catch (e) {
        console.log(e, "MongoDB connection crashed")
    }
}
