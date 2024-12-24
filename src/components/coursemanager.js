import React, { useState, useEffect } from "react";
import axios from "axios";

const CourseManager = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState("");

  // Fetch courses
  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("https://praneethbackend.onrender.com/courses");
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error.message);
    }
  };

  // Add a new course
  const handleAddCourse = async () => {
    if (newCourse.trim() === "") {
      alert("Course name cannot be empty.");
      return;
    }

    try {
      await axios.post("https://praneethbackend.onrender.com/courses", { name: newCourse.trim() });
      setNewCourse("");
      fetchCourses(); // Refresh the list
    } catch (error) {
      console.error("Error adding course:", error.message);
    }
  };

  // Delete a course
  const handleDeleteCourse = async (courseId) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      try {
        await axios.delete(`https://praneethbackend.onrender.com/courses/${courseId}`);
        fetchCourses(); // Refresh the list
      } catch (error) {
        console.error("Error deleting course:", error.message);
      }
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Manage Courses</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">New Course</label>
        <input
          type="text"
          className="border rounded w-full px-3 py-2 mb-2"
          placeholder="Enter course name"
          value={newCourse}
          onChange={(e) => setNewCourse(e.target.value)}
        />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={handleAddCourse}
        >
          Add Course
        </button>
      </div>
      <h3 className="text-md font-bold mt-6">Existing Courses</h3>
      <ul className="list-disc pl-5 mt-2">
        {courses.map((course) => (
          <li key={course.id} className="flex items-center justify-between mb-2">
            <span>{course.name}</span>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              onClick={() => handleDeleteCourse(course.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseManager;
