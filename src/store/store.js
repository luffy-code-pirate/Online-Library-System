// ─── REDUX STORE SETUP ────────────────────────────────────────────────────────
// Configures the Redux store using Redux Toolkit's configureStore.
// The books reducer manages all book-related state.

import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";

const store = configureStore({
  reducer: {
    books: booksReducer, // books state lives at state.books.books
  },
});

export default store;