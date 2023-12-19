const express = require('express');
const User = require("../model/users.model");
const cryptoJs = require('crypto-js');
const jwt = require('jsonwebtoken');

const loginHandler  = async (req, res) => {
    try {
        const { usernumber, userpassword } = req.body;
        
        if (!usernumber) {
            return res.status(400).json({ message: "Number is required" });
        }
        if (!userpassword) {
            return res.status(400).json({ message: "Password is required" });
        }

        const userData =  await User.findOne({number:usernumber});
        !userData && res.status(401).json({message:"Invalid Number"});

        const dpassword = cryptoJs.AES.decrypt(userData.password,process.env.PASSWORD_KEY).toString(cryptoJs.enc.Utf8);
        dpassword !== userpassword && res.status(401).json({message:"Incorrect Password"});

        const { password, ...rest} = userData._doc;
        const token = jwt.sign({id:userData._id},process.env.TOKEN)


        res.json({...rest,token});

    } catch (error) {

        res.status(500).json({ message: `Internal Server error ${error}` });

    }
};

module.exports = loginHandler;
