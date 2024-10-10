import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://irfan88:123456qwer@cluster0.jyxei.mongodb.net/food-del-app-2"
    )
    .then(() => console.log("DB Connected"));
};
