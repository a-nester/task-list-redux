// import { createReducer } from "@reduxjs/toolkit";
// import { statusFilters } from "./constants";
// import {
//   addTask,
//   deleteTask,
//   setStatusFilter,
//   toggleCompleted,
// } from "./actions";

// const taskInitialState = {
//   tasks: [
//     { id: 0, text: "Learn HTML and CSS", completed: true },
//     { id: 1, text: "Get good at JavaScript", completed: true },
//     { id: 2, text: "Master React", completed: false },
//     { id: 3, text: "Discover Redux", completed: false },
//     { id: 4, text: "Build amazing apps", completed: false },
//   ],
// };

// export const taskReducer = createReducer(taskInitialState, (builder) => {
//   builder
//     .addCase(addTask, (state, action) => {
//       state.push(action.payload);
//     })
//     .addCase(deleteTask, (state, action) => {
//       const index = state.findIndex((task) => task.id === action.payload);
//       state.splice(index, 1);
//       //   return state.filter((task) => task.id !== action.payload);
//     })
//     .addCase(toggleCompleted, (state, action) => {
//       for (const task of state) {
//         if (task.id === action.payload) {
//           task.completed = !task.completed;
//         }
//       }
//     });
// });
//   return state.map((task) => {
//     if (task.id !== action.payload) {
//       return task;
//     }
//     return { ...task, completed: !task.completed };
//   });

//     (state = taskInitialState, action) => {
//   switch (action.type) {
//     case addTask.type:
//       return [...state, action.payload];

//     case deleteTask.type:
//       return state.filter((task) => task.id !== action.payload);

//     case toggleCompleted:
//       return state.map((task) => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return { ...task, completed: !task.completed };
//       });

//     default:
//       return state;
//   }
// };

// const filterInitialState = {
//   status: statusFilters.all,
// };

// export const filtersReducer = createReducer(filterInitialState, (builder) => {
//   builder.addCase(setStatusFilter, (state, action) => {
//     state.status = action.payload;
//     // return { ...state, status: action.payload };
//   });
// });

//     (state = filterInitialState, action) => {
//   switch (action.type) {
//     case "filters/setStatusFilter": {
//       return {
//         ...state,
//         filters: { ...state.filters, status: action.payload },
//       };
//     }
//     default:
//       return state;
//   }
// };
