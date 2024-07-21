import mongoose from "mongoose";

const connectDataBase = async (MONGO_URI) => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to Database");
  } catch (error) {
    console.log("Connection failed", error);
  }
};

export { connectDataBase };
