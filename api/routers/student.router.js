const express = require("express");
const students = require('../controllers/student.controller');

const router = express();

//GET METHOD
router.get("/findAllStudents", students.findAllStudents);
router.get("/findStudentByRollNO", students.findStudentByRollNO);
router.get("/findStudentById",students.findStudentById)

//POST METHOD
router.post("/insertStudent", students.insertStudent);

//PUT METHOD
router.put("/updateStudentByRollNO", students.updateStudentByRollNO);
router.put("/updateAllStudents", students.updateAllStudents);
router.put("/updateSingleStudent",students.updateSingleStudent);
router.put("/findStudentByIdAndUpdate",students.findStudentByIdAndUpdate);

//DELETE METHOD
router.delete("/findStudentByIdAndDelete",students.findStudentByIdAndDelete);
router.delete("/findStudentByIdAndRemove",students.findStudentByIdAndRemove);
router.delete("/deleteSingleStudent",students.deleteSingleStudent);
router.delete("/deleteStudents",students.deleteStudents);
router.delete("/findStudentAndRemove",students.findStudentAndRemove)

module.exports = router;