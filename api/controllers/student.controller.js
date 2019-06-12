const student = require("../../models/student.model");



exports.insertStudent = (req, res) => {
    var data = new student(req.body);

    data.save((err, stud) => {
        if (err) {
            res.status(404).json("error while inserting student data....");
        } else {
            res.status(200).json(stud);
        }
    });
};


exports.findAllStudents = (err, res) => {
    student
        .find()
        .exec()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(404).json("problem while fetching students", err);
        });
};

exports.findStudentByRollNO = (req, res) => {
    student
        .findOne({
            roll_no: req.body.roll_no
        })
        .exec()
        .then(stud => {
            if (stud) {
                res.status(200).json(stud);
            } else {
                res.status(404).json({
                    message: "sutdent not found."
                });
            }
        })
        .catch(err => {
            res.status(404).json({
                error: err
            });
        });
};

exports.updateStudentByRollNO = (req, res) => {
    student.findOneAndUpdate({
        roll_no: req.body.roll_no
    }, {
        $set: {
            name: req.body.name,
            emailId: req.body.emailId,
            address: req.body.address
        }
    }, {

    }).exec().then(data => {
        if (data) {
            res.status(200).json({
                message: "your data successfully updated"
            });
        } else {
            res.status(404).json({
                message: "sutdent not found."
            });
        }
    }).catch(err => {
        res.status(404).json({
            error: err
        });
    });
};

exports.updateAllStudents = (req, res) => {
    student.updateMany({
            roll_no: {
                $gt: 5
            }
        }, {
            $set: {
                percentage: req.body.percentage
            }
        }, {
            upsert: false,
            multi: true
        },
        (err, stud) => {
            if (stud) {
                res.status(200).json(stud);
            } else {
                res.status(404).json("sutdent not found.");
            }
        }
    );
}

exports.updateSingleStudent = (req, res) => {
    student.updateOne({
            roll_no:req.body.roll_no
        }, {
            $set: {
                percentage: req.body.percentage
            }
        }, {
            upsert: false,
            multi: true
        },
        (err, stud) => {
            if (stud) {
                res.status(200).json(stud);
            } else {
                res.status(404).json("sutdent not found.");
            }
        }
    );
}

exports.findStudentById = (req, res) => {
    student.findById({_id:req.body._id}).exec().then(stud=>{
        if (stud) {
            res.status(200).json(stud);
        } else {
            res.status(404).json("sutdent not found.");
        }
    }).catch(err=>{
        res.status(404).json({
            error: err
        });
    });
}

exports.findStudentByIdAndUpdate = (req,res)=>{
    student.findByIdAndUpdate({_id:req.body._id},req.body,{upsert:false}).exec().then(stud=>{
        if (stud) {
            res.status(200).json("your data successfully updated.");
        } else {
            res.status(404).json("sutdent not found.");
        }
    }).catch(err=>{
        res.status(404).json({
            error: err
        });
    });
}

exports.findStudentByIdAndDelete = (req,res)=>{
    student.findByIdAndDelete({_id:req.body._id}).exec().then(stud=>{
        if (stud) {
            res.status(200).json("student successfully deleted.");
        } else {
            res.status(404).json("sutdent not found.");
        }
    }).catch(err=>{
        res.status(404).json({
            error: err
        });
    });
}

// delete student 
exports.findStudentByIdAndRemove = (req,res)=>{
    student.findByIdAndRemove({_id:req.body._id}).exec().then(stud=>{
        if (stud) {
            res.status(200).json("student successfully deleted.");
        } else {
            res.status(404).json("sutdent not found.");
        }
    }).catch(err=>{
        res.status(404).json({
            error: err
        });
    });
}

// delete single student
exports.deleteSingleStudent = (req,res)=>{
    student.deleteOne({name:req.body.name}).exec().then(stud=>{
        if (stud) {
            res.status(200).json("student successfully deleted.");
        } else {
            res.status(404).json("sutdent not found.");
        }
    }).catch(err=>{
        res.status(404).json({
            error: err
        });
    });
}
// Delete multiple students
exports.deleteStudents = (req,res)=>{
    student.deleteMany({name:req.body.name}).exec().then(stud=>{
        if (stud) {
            res.status(200).json("student successfully deleted.");
        } else {
            res.status(404).json("sutdent not found.");
        }
    }).catch(err=>{
        res.status(404).json({
            error: err
        });
    });
}

// find name and remove single student
exports.findStudentAndRemove = (req,res)=>{
    student.findOneAndRemove({name:req.body.name}).exec().then(stud=>{
        if (stud) {
            res.status(200).json("student successfully deleted.");
        } else {
            res.status(404).json("sutdent not found.");
        }
    }).catch(err=>{
        res.status(404).json({
            error: err
        });
    });
}