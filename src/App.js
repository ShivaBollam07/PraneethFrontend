import React, { useState } from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import StudentTable from "./components/students";
import CourseManager from "./components/coursemanager";
import { store } from "./components/store/store";
import { Provider } from "react-redux";
import { Users, BookOpen } from "lucide-react";

const App = () => {
  const [activeTab, setActiveTab] = useState("students");

  const TabButton = ({ icon, label, isActive, onClick }) => (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 px-6 py-3 rounded-lg font-medium
        transition-all duration-200 hover:shadow-md
        ${isActive 
          ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 transform scale-105' 
          : 'bg-white text-gray-600 hover:bg-gray-50'}
      `}
    >
      {icon}
      <span>{label}</span>
    </button>
  );

  return (
    <Provider store={store}>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        
        <div className="flex-1 flex flex-col">
          <Navbar />
          
          <main className="p-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Student Management
                </h1>
                <p className="text-gray-600">
                  Manage your students and courses efficiently
                </p>
              </header>

              {/* Enhanced Tab Selector */}
              <div className="flex flex-wrap gap-4 mb-8">
                <TabButton 
                  icon={<Users size={20} />}
                  label="Manage Students"
                  isActive={activeTab === "students"}
                  onClick={() => setActiveTab("students")}
                />
                <TabButton 
                  icon={<BookOpen size={20} />}
                  label="Manage Courses"
                  isActive={activeTab === "courses"}
                  onClick={() => setActiveTab("courses")}
                />
              </div>

              {/* Content Container */}
              <div className="bg-white rounded-xl shadow-sm p-6 transition-all duration-300">
                {activeTab === "students" ? (
                  <div className="animate-fadeIn">
                    <StudentTable />
                  </div>
                ) : (
                  <div className="animate-fadeIn">
                    <CourseManager />
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </Provider>
  );
};

export default App;