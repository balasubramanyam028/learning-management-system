import app from "./app.js";
import { connectDb } from './database/db.js'
import { v2 as cloudinary } from 'cloudinary';
import Razorpay from 'razorpay'


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

console.log("Razorpay Key ID:", process.env.RAZORPAY_KEY_ID ? "Loaded ✅" : "Missing ❌");
console.log("Razorpay Key Secret:", process.env.RAZORPAY_KEY_SECRET ? "Loaded ✅" : "Missing ❌");

export const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

const PORT = process.env.PORT || 10000;

/*app.listen(process.env.PORT, () => {
    connectDb()
    console.log(`server is running on http://localhost:${process.env.PORT}`);
})*/


app.listen(PORT, () => {
  connectDb();
  console.log(`✅ Server is running on port ${PORT}`);
});