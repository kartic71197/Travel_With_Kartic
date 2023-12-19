const express = require('express');
const mongoose = require('mongoose');


const Category = require("../model/category.model");
const categories = require("../data/categories");

const router = express.Router();

router.route("/")
.post((req,res)=>{
        try{
            const categoryInDb = Category.insertMany(categories.data);
            res.json(categoryInDb);
        }catch(error){
            res.json(error)
        }
})

module.exports = router;