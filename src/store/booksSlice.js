// ─── REDUX SLICE: booksSlice ──────────────────────────────────────────────────
// Manages the global books list state using Redux Toolkit.
// Actions:
//   addBook → prepends a new book to the BEGINNING of the list
//             so after submission it shows first on Browse Books page

import { createSlice } from "@reduxjs/toolkit";
import { initialBooks } from "../data/books";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: initialBooks, // seed the store with our dummy data
  },
  reducers: {
    // addBook: adds new book to FRONT of array using unshift
    addBook: (state, action) => {
      const newBook = {
        ...action.payload,
        id: Date.now(), // unique id using timestamp
      };
      state.books.unshift(newBook); // prepend → shows at beginning of list
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;