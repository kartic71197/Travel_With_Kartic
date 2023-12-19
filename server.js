const express = require('express');
const mongoose = require('mongoose');

const WishlistRouter = require("./routes/wishlist.router");
const authRouter = require("./routes/auth.router");
const categoriesDataAddedTOBdRouter =  require("./routes/categoryImport.router");
const categoryRouter = require("./routes/category.router");
const hotelRouter = require("./routes/hotel.router");
const hotelDataAddedToBdRouter = require("./routes/dataimport.router");
const singleHotelRouter = require("./routes/singlehotel.router");

const connectDB = require("./config/dbconfig");

const bodyParser = require('body-parser');



const app = express();

app.use(express.json());


const PORT = 3500;

app.get("/",(req,res) => {
    res.send('No Data')
});
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/hotels", hotelRouter);
app.use("/api/hoteldata", hotelDataAddedToBdRouter);
app.use("/api/categorydata", categoriesDataAddedTOBdRouter);
app.use("/api/category", categoryRouter);
app.use("/api/hotels",singleHotelRouter);
app.use("/api/auth",authRouter);
app.use("/api/wishlist",WishlistRouter);

connectDB().then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});
