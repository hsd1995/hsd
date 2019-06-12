const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user');
const db = require('../db/db.config');

const router = express();
router.use(db,()=>{});

// router.post('/register', (req, res) => {
//     let userData = req.body;
//     let user = new User(userData);
//     user.save((err, registerData) => {
//         if (err) {
//             res.send(err);
//         } else {
//             res.status(200).send(userData);
//         }
//     })
// })

router.post('/login', (req, res) => {
    let userData = req.body;
    User.findOne({email: userData.email},(err,user)=>{
        if(err){
            console.log(err);
        }else{
            if(!user){
                res.status(401).send("Invalid EmailID");
            }else{
                if (userData.password !== user.password) {
                    res.status(401).send("Invalid password");
                } else {
                    res.status(200).send("you loggedin successfully.");
                }
            }
        }
    });
});
module.exports = router;