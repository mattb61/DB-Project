const express = require("express");
const studentRouter = express.Router ();

const {getStudents, getStudent, getStudentById, submitStudent, updateStudent, deleteStudent,
  updateStudentById, deleteStudentById} = require ("../controllers/student.controller.js");

studentRouter.get ('/', getStudents);
studentRouter.get ('/id=:id', getStudent);
studentRouter.post ('/', submitStudent);
studentRouter.put ('/id=:id', updateStudent);
studentRouter.delete ('/id=:id', deleteStudent);

studentRouter.get ('/cid=:id', getStudentById);
studentRouter.put ('/cid=:id', updateStudentById);
studentRouter.delete ('/cid=:id', deleteStudentById);

module.exports = studentRouter;