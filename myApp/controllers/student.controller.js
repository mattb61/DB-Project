const Student = require ("../model/student.model.js");

const getStudents = async (req, res) => {
    try {
        const students = await Student.find ({});
        res.status(200).json(students);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
}

const getStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.find ({_id:id});
        res.status(200).json(student);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};

const getStudentById = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.find ({studentId:id});
        res.status(200).json(student);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};

const submitStudent = async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.status(200).json(student);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateStudent = async (req, res) =>{
    try {
        const { id } = req.params;
        const student = await Student.findByIdAndUpdate (id, req.body);
        if (!student) {
            return (res.status(404).json({message: "Student not found"}));
        }
        const updatedStudent = await Student.findById(id);
        res.status(200).json(updatedStudent);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};

const updateStudentById = async (req, res) =>{
    try {
        const { id } = req.params;
        const student = await Student.findOneAndUpdate ({studentId:id}, req.body);
        if (!student) {
            return (res.status(404).json({message: "Student not found"}));
        }
        const updatedStudent = await Student.findOne({studentId:id});
        res.status(200).json(updatedStudent);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};

const deleteStudent = async (req, res) =>{
    try {
        const { id } = req.params;
        const student = await Student.findByIdAndDelete (id);

        if (!student) {
            return res.status(404).json({message: "Student not found"});
        }
        res.status(200).json({ message: "Student deleted."});
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};

const deleteStudentById = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findOneAndDelete ({studentId:id});

        if (!student) {
            return res.status(404).json({message: "Student not found"});
        }
        res.status(200).json({ message: "Student deleted."});
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};



module.exports = {
    getStudents,
    getStudent,
    submitStudent,
    updateStudent,
    deleteStudent,
    getStudentById,
    updateStudentById,
    deleteStudentById
};