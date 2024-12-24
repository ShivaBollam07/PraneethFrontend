// // import React, { useState } from "react";
// // import { useDispatch } from "react-redux";
// // import { fetchStudents } from "./store/studentslice";
// // import axios from "axios";

// // const StudentForm = ({ isOpen, onClose }) => {
// //   const dispatch = useDispatch();
// //   const [studentName, setStudentName] = useState("");
// //   const [cohort, setCohort] = useState("AY 2024-25");
// //   const [courses, setCourses] = useState("");

// //   // Automatically get the current date and time for `date_joined`
// //   const dateJoined = new Date().toISOString();

// //   const handleAddStudent = async () => {
// //     try {
// //       await axios.post("http://localhost:3001/students", {
// //         student_name: studentName,
// //         cohort,
// //         courses: courses.split(","),
// //         date_joined: dateJoined,
// //         last_login: dateJoined, // Using the same date for simplicity
// //         status,
// //       });
// //       dispatch(fetchStudents()); // Refresh the students list
// //       onClose(); // Close the modal
// //     } catch (error) {
// //       console.error("Error adding student:", error.message);
// //     }
// //   };

// //   if (!isOpen) return null;

// //   return (
// //     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
// //       <div className="bg-white p-6 rounded shadow-lg w-96">
// //         <h2 className="text-xl font-bold mb-4">Add New Student</h2>
// //         <div className="mb-4">
// //           <label className="block text-sm font-medium mb-1">Name</label>
// //           <input
// //             type="text"
// //             className="border rounded w-full px-3 py-2"
// //             placeholder="Enter student name"
// //             value={studentName}
// //             onChange={(e) => setStudentName(e.target.value)}
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block text-sm font-medium mb-1">Cohort</label>
// //           <select
// //             className="border rounded w-full px-3 py-2"
// //             value={cohort}
// //             onChange={(e) => setCohort(e.target.value)}
// //           >
// //             <option>AY 2024-25</option>
// //             <option>AY 2023-24</option>
// //           </select>
// //         </div>
// //         <div className="mb-4">
// //           <label className="block text-sm font-medium mb-1">Courses</label>
// //           <input
// //             type="text"
// //             className="border rounded w-full px-3 py-2"
// //             placeholder="Enter courses (comma-separated)"
// //             value={courses}
// //             onChange={(e) => setCourses(e.target.value)}
// //           />
// //         </div>
// //         <button
// //           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// //           onClick={handleAddStudent}
// //         >
// //           Add Student
// //         </button>
// //         <button
// //           className="bg-gray-300 text-black px-4 py-2 rounded ml-2 hover:bg-gray-400"
// //           onClick={onClose}
// //         >
// //           Cancel
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default StudentForm;
// // import React, { useState } from "react";
// // import { useDispatch } from "react-redux";
// // import { fetchStudents } from "./store/studentslice";
// // import axios from "axios";

// // const StudentForm = ({ isOpen, onClose }) => {
// //   const dispatch = useDispatch();
// //   const [studentName, setStudentName] = useState("");
// //   const [cohort, setCohort] = useState("AY 2024-25");
// //   const [courses, setCourses] = useState("");
// //   const [status, setStatus] = useState(true); // Default to true

// //   // Automatically get the current date and time for `date_joined`
// //   const dateJoined = new Date().toISOString();

// //   const handleAddStudent = async () => {
// //     try {
// //       await axios.post("http://localhost:3001/students", {
// //         student_name: studentName,
// //         cohort,
// //         courses: courses.split(","),
// //         date_joined: dateJoined,
// //         last_login: dateJoined, // Using the same date for simplicity
// //         status,
// //       });
// //       dispatch(fetchStudents()); // Refresh the students list
// //       onClose(); // Close the modal
// //     } catch (error) {
// //       console.error("Error adding student:", error.message);
// //     }
// //   };

// //   if (!isOpen) return null;

// //   return (
// //     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
// //       <div className="bg-white p-6 rounded shadow-lg w-96">
// //         <h2 className="text-xl font-bold mb-4">Add New Student</h2>
// //         <div className="mb-4">
// //           <label className="block text-sm font-medium mb-1">Name</label>
// //           <input
// //             type="text"
// //             className="border rounded w-full px-3 py-2"
// //             placeholder="Enter student name"
// //             value={studentName}
// //             onChange={(e) => setStudentName(e.target.value)}
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block text-sm font-medium mb-1">Cohort</label>
// //           <select
// //             className="border rounded w-full px-3 py-2"
// //             value={cohort}
// //             onChange={(e) => setCohort(e.target.value)}
// //           >
// //             <option>AY 2024-25</option>
// //             <option>AY 2023-24</option>
// //           </select>
// //         </div>
// //         <div className="mb-4">
// //           <label className="block text-sm font-medium mb-1">Courses</label>
// //           <input
// //             type="text"
// //             className="border rounded w-full px-3 py-2"
// //             placeholder="Enter courses (comma-separated)"
// //             value={courses}
// //             onChange={(e) => setCourses(e.target.value)}
// //           />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block text-sm font-medium mb-1">Status</label>
// //           <div className="flex items-center space-x-4">
// //             <button
// //               className={`px-4 py-2 rounded ${
// //                 status ? "bg-green-500 text-white" : "bg-gray-300 text-black"
// //               }`}
// //               onClick={() => setStatus(true)}
// //             >
// //               Active
// //             </button>
// //             <button
// //               className={`px-4 py-2 rounded ${
// //                 !status ? "bg-red-500 text-white" : "bg-gray-300 text-black"
// //               }`}
// //               onClick={() => setStatus(false)}
// //             >
// //               Inactive
// //             </button>
// //           </div>
// //         </div>
// //         <button
// //           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// //           onClick={handleAddStudent}
// //         >
// //           Add Student
// //         </button>
// //         <button
// //           className="bg-gray-300 text-black px-4 py-2 rounded ml-2 hover:bg-gray-400"
// //           onClick={onClose}
// //         >
// //           Cancel
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default StudentForm;
// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { fetchStudents, updateStudent } from "./store/studentslice";
// import axios from "axios";

// const StudentForm = ({ isOpen, onClose, student, onSubmit }) => {
//   const dispatch = useDispatch();

//   // Initialize state with default values or pre-fill with the selected student's data
//   const [studentName, setStudentName] = useState("");
//   const [cohort, setCohort] = useState("AY 2024-25");
//   const [courses, setCourses] = useState("");
//   const [status, setStatus] = useState(true); // Default to true

//   // Update state if a student is passed (edit mode)
//   useEffect(() => {
//     if (student) {
//       setStudentName(student.student_name);
//       setCohort(student.cohort);
//       setCourses(student.courses.join(", ")); // Convert array to comma-separated string
//       setStatus(student.status);
//     }
//   }, [student]);

//   // Handle Add/Edit Student
//   const handleSaveStudent = async () => {
//     try {
//       if (student) {
//         // Edit existing student
//         const updatedData = {
//           student_name: studentName,
//           cohort,
//           courses: courses.split(",").map((course) => course.trim()), // Convert string back to array
//           status,
//         };

//         // Call the update API directly or dispatch the update action
//         await axios.put(`http://localhost:3001/students/${student.id}`, updatedData);
//         dispatch(fetchStudents()); // Refresh the students list
//       } else {
//         // Add a new student
//         const newStudentData = {
//           student_name: studentName,
//           cohort,
//           courses: courses.split(",").map((course) => course.trim()),
//           date_joined: new Date().toISOString(),
//           last_login: new Date().toISOString(),
//           status,
//         };

//         await axios.post("http://localhost:3001/students", newStudentData);
//         dispatch(fetchStudents()); // Refresh the students list
//       }

//       onClose(); // Close the modal
//     } catch (error) {
//       console.error("Error saving student:", error.message);
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//       <div className="bg-white p-6 rounded shadow-lg w-96">
//         <h2 className="text-xl font-bold mb-4">
//           {student ? "Edit Student" : "Add New Student"}
//         </h2>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Name</label>
//           <input
//             type="text"
//             className="border rounded w-full px-3 py-2"
//             placeholder="Enter student name"
//             value={studentName}
//             onChange={(e) => setStudentName(e.target.value)}
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Cohort</label>
//           <select
//             className="border rounded w-full px-3 py-2"
//             value={cohort}
//             onChange={(e) => setCohort(e.target.value)}
//           >
//             <option>AY 2024-25</option>
//             <option>AY 2023-24</option>
//           </select>
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Courses</label>
//           <input
//             type="text"
//             className="border rounded w-full px-3 py-2"
//             placeholder="Enter courses (comma-separated)"
//             value={courses}
//             onChange={(e) => setCourses(e.target.value)}
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1">Status</label>
//           <div className="flex items-center space-x-4">
//             <button
//               className={`px-4 py-2 rounded ${
//                 status ? "bg-green-500 text-white" : "bg-gray-300 text-black"
//               }`}
//               onClick={() => setStatus(true)}
//             >
//               Active
//             </button>
//             <button
//               className={`px-4 py-2 rounded ${
//                 !status ? "bg-red-500 text-white" : "bg-gray-300 text-black"
//               }`}
//               onClick={() => setStatus(false)}
//             >
//               Inactive
//             </button>
//           </div>
//         </div>
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           onClick={handleSaveStudent}
//         >
//           {student ? "Save Changes" : "Add Student"}
//         </button>
//         <button
//           className="bg-gray-300 text-black px-4 py-2 rounded ml-2 hover:bg-gray-400"
//           onClick={onClose}
//         >
//           Cancel
//         </button>
//       </div>
//     </div>
//   );
// };

// export default StudentForm;
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchStudents } from "./store/studentslice";
import axios from "axios";

const StudentForm = ({ isOpen, onClose, student, onSubmit }) => {
  const dispatch = useDispatch();
  const [studentName, setStudentName] = useState("");
  const [cohort, setCohort] = useState("AY 2024-25");
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]); // List of all courses
  const [status, setStatus] = useState(true);

  useEffect(() => {
    // Fetch available courses
    axios.get("http://localhost:3001/courses").then((response) => {
      setAllCourses(response.data);
    });

    if (student) {
      setStudentName(student.student_name);
      setCohort(student.cohort);
      setSelectedCourses(student.courses || []);
      setStatus(student.status);
    }
  }, [student]);

  const handleSaveStudent = async () => {
    const studentData = {
      student_name: studentName,
      cohort,
      courses: selectedCourses,
      status,
    };

    if (student) {
      // Edit existing student
      await axios.put(`https://praneethbackend.onrender.com/${student.id}`, studentData);
    } else {
      // Add a new student
      const dateJoined = new Date().toISOString();
      await axios.post("http://localhost:3001/students", {
        ...studentData,
        date_joined: dateJoined,
        last_login: dateJoined,
      });
    }

    dispatch(fetchStudents()); // Refresh the student list
    onClose(); // Close the modal
  };

  const handleCourseSelection = (course) => {
    if (selectedCourses.includes(course)) {
      setSelectedCourses(selectedCourses.filter((c) => c !== course));
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">{student ? "Edit Student" : "Add New Student"}</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            className="border rounded w-full px-3 py-2"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Cohort</label>
          <select
            className="border rounded w-full px-3 py-2"
            value={cohort}
            onChange={(e) => setCohort(e.target.value)}
          >
            <option>AY 2024-25</option>
            <option>AY 2023-24</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Courses</label>
          <div className="border rounded w-full px-3 py-2 max-h-48 overflow-y-scroll">
            {allCourses.map((course) => (
              <div key={course.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={`course-${course.id}`}
                  checked={selectedCourses.includes(course.name)}
                  onChange={() => handleCourseSelection(course.name)}
                  className="mr-2"
                />
                <label htmlFor={`course-${course.id}`} className="text-sm">
                  {course.name}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Status</label>
          <div className="flex items-center space-x-4">
            <button
              className={`px-4 py-2 rounded ${
                status ? "bg-green-500 text-white" : "bg-gray-300 text-black"
              }`}
              onClick={() => setStatus(true)}
            >
              Active
            </button>
            <button
              className={`px-4 py-2 rounded ${
                !status ? "bg-red-500 text-white" : "bg-gray-300 text-black"
              }`}
              onClick={() => setStatus(false)}
            >
              Inactive
            </button>
          </div>
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleSaveStudent}
        >
          {student ? "Save Changes" : "Add Student"}
        </button>
        <button
          className="bg-gray-300 text-black px-4 py-2 rounded ml-2 hover:bg-gray-400"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default StudentForm;
