import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const URI =
      process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/fullstackportfolio";
    await mongoose.connect(URI, {
      useNewUrlParser: true,
    });
    console.log("mongoDb connected successfully.");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
