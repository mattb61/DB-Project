const Course = require ("../model/course.model.js");

const getCourses = async (req, res) => {
    try {
        const courses = await Course.find ({});
        res.status(200).json(courses);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
}

const getCourse = async (req, res) => {
    try {
        const courses = await Course.find ({});
        res.status(200).json(courses);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};

const createCourse = async (req, res) => {
    try {
        const sched = await Course.create(req.body);
        res.status(200).json(sched);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateCourse = async (req, res) =>{
    try {
        const { id } = req.params;
        const course = await Course.findByIdAndUpdate (id, req.body);
        if (!course) {
            return (res.status(404).json({message: "Course not found"}));
        }
        const updatedCourse = await Course.findById(id);
        res.status(200).json(updatedCourse);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};

const deleteCourse = async (req, res) =>{
    try {
        const { id } = req.params;
        const course = await Course.findByIdAndDelete (id);

        if (!course) {
            return res.status(404).json({message: "Course not found"});
        }
        
        res.status(200).json({ message: "Course deleted."});
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
};


module.exports = {
    getCourses,
    getCourse,
    createCourse,
    updateCourse,
    deleteCourse
};