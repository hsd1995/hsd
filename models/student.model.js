const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name:String,
    address:String,
    roll_no:{
        type:Number,
    },
    percentage:Number,
    emailId:String
});

module.exports = mongoose.model('student',studentSchema,'student');