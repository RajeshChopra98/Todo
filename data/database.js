import mongoose from "mongoose";

export const connectDB = async() => {
  await mongoose.connect(String(process.env.MONGO_URI), {
      dbName: "flutterTest",
    })
    .then((c) => console.log(`Database Connected with ${c.connection.host}`))
    .catch((e) => console.log(e));
};
