const express = require('express');
const User = require("../model/users.model");
const cryptoJs = require('crypto-js');
const jwt = require('jsonwebtoken');


const sigupHandler = async (req, res) => {
    try { 
        const { name, number, email, password } = req.body;
        if (!name) {
            return res.status(400).json({ message: "Name is required" });
        }
        if (!number) {
            return res.status(400).json({ message: "Number is required" });
        }
        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }
        if (!password) {
            return res.status(400).json({ message: "Password is required" });
        }
        const newUser = new User({
            name,
            number,
            email,
            password : cryptoJs.AES.encrypt(password,process.env.PASSWORD_KEY).toString()
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ message: `Internal Server error ${error}` });
    }
};

module.exports = sigupHandler;