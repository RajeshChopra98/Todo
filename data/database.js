import mongoose from "mongoose";

export const connectDB = async() => {
  await mongoose.connect(process.env.MONGO_URI, {
      dbName: "todo",
    })
    .then((c) => console.log(`Database Connected with ${c.connection.host}`))
    .catch((e) => console.log(e));
};
