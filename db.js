import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv://intingUser:12345@cluster-1.ue3dsti.mongodb.net/taskDB?retryWrites=true&w=majority";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected to Atlas");
  } catch (err) {
    console.log("❌ MongoDB connection error:", err);
    throw err;
  }
};


