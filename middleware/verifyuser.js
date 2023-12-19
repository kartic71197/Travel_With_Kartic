const jwt =  require("jsonwebtoken");

const verifyuser = (req,res,next) => {
    const token = req.headers.authorization;
    if(token){
        jwt.verify(token, porcess.env.Token, (err,user)=>{
            if(err)res.status(403).json({message: "Invalid Token"})
            req.user = user;
            next()    
        })
    }
}

module.exports = verifyuser;