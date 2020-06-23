const jwt = require('jsonwebtoken')
const User = require('../models/user')
const auth = async(req,res,next) =>{
    try{
        console.log('Before barrer')
        const token = req.header('Authorization').replace('Bearer ','')
        console.log('token verify')
        const decoded = jwt.verify(token,'thisismynewcourse')

        console.log(decoded)
        const user = await User.findOne({_id:decoded._id,'tokens.token':token})
        console.log('after user')
        if(!user){
            
            throw new Error()
        }
        req.token = token
        req.user = user
        next()
        console.log(token)
    }
    catch(e){
        res.status(401).send({error:'Please authenticaste .'})
    }
}
module.exports = auth