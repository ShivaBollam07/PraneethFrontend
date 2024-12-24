import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch students
export const fetchStudents = createAsyncThunk(
    "students/fetchStudents",
    async (filter) => {
      const response = await axios.get("https://praneethbackend.onrender.com/students", {
        params: filter, // Pass filters as query parameters
      });
      return response.data;
    }
  );
  
// Delete a student
export const deleteStudent = createAsyncThunk("students/deleteStudent", async (id) => {
  await axios.delete(`https://praneethbackend.onrender.com/students/${id}`);
  return id; // Return the ID of the deleted student
});

// Update a student
export const updateStudent = createAsyncThunk(
    "students/updateStudent",
    async ({ id, updatedData }) => {
      const response = await axios.put(`https://praneethbackend.onrender.com/students/${id}`, updatedData);
      return { id, ...updatedData }; // Ensure the payload structure matches the state requirements
    }
  );
  const studentsSlice = createSlice({
    name: "students",
    initialState: {
      students: [],
      status: "idle",
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(fetchStudents.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.students = action.payload;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // Delete student
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.students = state.students.filter((student) => student.id !== action.payload);
      })
      .addCase(deleteStudent.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateStudent.fulfilled, (state, action) => {
        const index = state.students.findIndex((student) => student.id === action.payload.id);
        if (index !== -1) {
          state.students[index] = { ...state.students[index], ...action.payload }; // Merge the changes
        }
      })
      .addCase(updateStudent.rejected, (state, action) => {
        console.error("Error updating student:", action.error.message);
        state.error = action.error.message;
      });
      
      
    },
  });
// const studentsSlice = createSlice({
//   name: "students",
//   initialState: {
//     students: [],
//     status: "idle",
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       // Fetch students
     
//       // Update student
//       .addCase(updateStudent.fulfilled, (state, action) => {
//         const index = state.students.findIndex((student) => student.id === action.payload.id);
//         if (index !== -1) {
//           state.students[index] = action.payload; // Update the specific student
//         }
//       })
//       .addCase(updateStudent.rejected, (state, action) => {
//         state.error = action.error.message;
//       });
//   },
// });

export default studentsSlice.reducer;
