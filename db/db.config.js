const mongoose = require('mongoose');


const db = "mongodb://harshal:harshal123@ds157256.mlab.com:57256/authdb";

mongoose.connect(db, {
    useNewUrlParser: true
}, (err) => {
    if (err) {
        console.log("Error in mongodb connection" + err);
    } else {
        console.log("mongodb connection is successfully created.");
    }
})

module.exports = mongoose;