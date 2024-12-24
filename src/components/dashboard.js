// StudentTable.js
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStudents, updateStudent, deleteStudent } from "./store/studentslice";
import StudentForm from "./studentform";
import { FiUserPlus, FiEdit, FiTrash } from "react-icons/fi";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

const StudentTable = () => {
  const dispatch = useDispatch();
  const { students, status, error } = useSelector((state) => state.students);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  const handleEdit = (student) => {
    setSelectedStudent(student);
    setIsFormOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      dispatch(deleteStudent(id));
    }
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="p-4 relative">
      <h2 className="text-lg font-bold mb-4">Student Details</h2>

      {/* Add Student Button */}
      <button
        className="absolute top-4 right-4 flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        onClick={() => {
          setSelectedStudent(null);
          setIsFormOpen(true);
        }}
      >
        <FiUserPlus className="mr-2" />
        Add Student
      </button>

      {/* Table */}
      <table className="table-auto w-full border border-gray-200 mt-12">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Student Name</th>
            <th className="border px-4 py-2">Cohort</th>
            <th className="border px-4 py-2">Courses</th>
            <th className="border px-4 py-2">Date Joined</th>
            <th className="border px-4 py-2">Last Login</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td className="border px-4 py-2">{student.id}</td>
              <td className="border px-4 py-2">{student.student_name}</td>
              <td className="border px-4 py-2">{student.cohort}</td>
              <td className="border px-4 py-2">{student.courses.join(", ")}</td>
              <td className="border px-4 py-2">{student.date_joined}</td>
              <td className="border px-4 py-2">{student.last_login}</td>
              <td className="border px-4 py-2 text-center">
                {student.status ? (
                  <AiOutlineCheckCircle className="text-green-500 text-xl inline" />
                ) : (
                  <AiOutlineCloseCircle className="text-red-500 text-xl inline" />
                )}
              </td>
              <td className="border px-4 py-2 flex items-center justify-center gap-2">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  onClick={() => handleEdit(student)}
                >
                  <FiEdit />
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  onClick={() => handleDelete(student.id)}
                >
                  <FiTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Student Form Modal */}
      {isFormOpen && (
        <StudentForm
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          student={selectedStudent}
        />
      )}
    </div>
  );
};

export default StudentTable;
