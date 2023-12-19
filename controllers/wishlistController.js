const express = require("express");
const Wishlist = require("../model/wishlist.model");
const router = express.Router();

const createWishlist = async(req,res)=>{
    try{
        const newWishList = new Wishlist(req.body);
        const savedWishList = await newWishList.save();
        res.status(201).json({message:"Hotel added to Wishlist"});
    }catch(error){
        res.status(500).json({message:`Error : ${error}`});
    }
};

const deleteWishlist = async(req,res)=>{
    try{
        await Wishlist.findByIdAndDelete(req.params.id);
        res.status(201).json({message:"Hotel removed from Wishlist"});
    }catch(error){
        res.status(500).json({message:`Error : ${error}`});
    }
};

const getWishlist = async(req,res)=>{
    try{

        const wishlist =  await Wishlist.find({});
        wishlist ? res.status(200).json(wishlist) : res.status(200).json({message: "No data Found"});
    }catch(error){
        res.status(500).json({message:`Error : ${error}`});
    }
};

module.exports = {createWishlist,deleteWishlist,getWishlist};