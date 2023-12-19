
const Hotel = require("../model/hotel.model.js");
const signleHotelHandler = async(req,res) => {
    try{
        const {id} = req.params;
        const hotel = await Hotel.findById(id);
        hotel ? res.json(hotel) : res.json("Hotel doesn't exist");
    }catch(error){
        res.status(404).json({message:`Could not find the data ${error}`});
    }
};

module.exports = signleHotelHandler;