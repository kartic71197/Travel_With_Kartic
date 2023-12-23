const Category = require("../model/category.model");

const categoryHandler = async (req,res)=>{
    try{
        const categories = await Category.find({});
        res.json(categories);
    }catch(error){
        res.status(404).json({messgae:`Couldnt find category because ${error}`});
    }      
};

module.exports = categoryHandler;