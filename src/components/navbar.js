import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "./store/studentslice";
import profile from "./myprofile.jpg";
import axios from "axios";
import { Search, Bell, ChevronDown } from "lucide-react";

export const Navbar = () => {
  const dispatch = useDispatch();
  const [allCourses, setAllCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedAcademicYear, setSelectedAcademicYear] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("https://praneethbackend.onrender.com/courses");
        setAllCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error.message);
      }
    };
    fetchCourses();
  }, []);

  const handleFilterChange = () => {
    console.log("Dispatching filters:", {
      course: selectedCourse,
      academic_year: selectedAcademicYear,
    });

    // Dispatch the selected academic year and course to fetch students
    dispatch(fetchStudents({ course: selectedCourse, academic_year: selectedAcademicYear }));
  };

  const SelectInput = ({ value, onChange, options, placeholder }) => (
    <div className="relative inline-block">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-gray-100"
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option.name || option}>
            {option.name || option}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
    </div>
  );

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              className="pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Search your course"
            />
          </div>

          {/* Academic Year Select */}
          <SelectInput
            value={selectedAcademicYear}
            onChange={(value) => {
              setSelectedAcademicYear(value);
              handleFilterChange();
            }}
            options={["AY 2023-24","AY 2024-25"]}
            placeholder="Select Academic Year"
          />

          {/* Course Select */}
          <SelectInput
            value={selectedCourse}
            onChange={(value) => {
              setSelectedCourse(value);
              handleFilterChange();
            }}
            options={allCourses}
            placeholder="All Courses"
          />
        </div>

        {/* Right Side - Profile Section */}
        <div className="flex items-center space-x-6">
          <button className="relative hover:bg-gray-100 p-2 rounded-full transition-colors">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              2
            </span>
          </button>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-blue-100">
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="hidden sm:block font-medium text-gray-700">
              Vedagiri Praneeth
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
