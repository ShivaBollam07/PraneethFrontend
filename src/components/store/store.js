import { configureStore } from "@reduxjs/toolkit";
// import studentsReducer from "./studentsslice";
import studentsReducer from "./studentslice"; // Ensure the path and case match

// import studentsReducer

export const store = configureStore({
  reducer: {
    students: studentsReducer,
  },
});
