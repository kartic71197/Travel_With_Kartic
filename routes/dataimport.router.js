const express = require('express');
const mongoose = require('mongoose');


const Hotel = require("../model/hotel.model");
const hotels = require("../data/hotels");

const router = express.Router();

router.route("/")
.post((req,res)=>{
        try{
            const hotelsInDb = Hotel.insertMany(hotels.data);
            res.json(hotelsInDb);
        }catch(error){
            res.json(error)
        }
})

module.exports = router;