const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent, processDeleteStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    const payload = { name, className, section, roll } = req.query;
    const students = await getAllStudents(payload);
    res.json({ students });
});

const handleAddStudent = asyncHandler(async (req, res) => {
    const payload = req.body;
    const message = await addNewStudent(payload);
    res.json(message);
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const newStudentData = req.body;
    const message = await updateStudent({ ...newStudentData, userId: id });
    res.json(message);

});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const student = await getStudentDetail(id);
    res.json(student);

});

const handleStudentStatus = asyncHandler(async (req, res) => {
    const { id: userId } = req.params;
    const { reviewerId, status } = req.body;
    const payload = { userId , reviewerId, status };
    const message = await setStudentStatus(payload);
    res.json(message);

});



const handleDeleteStudent = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const message = await processDeleteStudent(id);
  res.json(message);
});



module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
    handleDeleteStudent,
};
