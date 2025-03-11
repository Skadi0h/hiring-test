const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, updateStudent, setStudentStatus } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    const payload = req.query;
    const students = await getAllStudents(payload);
    res.json(students);
});

const handleAddStudent = asyncHandler(async (req, res) => {
    const studentData = req.body;
    const result = await addNewStudent(studentData);
    res.json(result);
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    const studentData = req.body;
    const result = await updateStudent(studentData);
    res.json(result);
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const student = await getStudentDetail(id);
    res.json(student);
});

const handleStudentStatus = asyncHandler(async (req, res) => {
    const { userId, reviewerId, status } = req.body;
    const result = await setStudentStatus({ userId, reviewerId, status });
    res.json(result);
});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
