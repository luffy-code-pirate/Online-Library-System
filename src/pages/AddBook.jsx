// ─── PAGE: AddBook ────────────────────────────────────────────────────────────
// Requirements covered:
//   ✅ Form with fields: title, author, category, description, rating
//   ✅ Redux: dispatches addBook action (prepends to store list)
//   ✅ After submit → redirects to /books/all (new book shows first)
//   ✅ Form validation: all fields required, rating must be 1–5
//
// Flow: fill form → validate → dispatch addBook → navigate to /books/all

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../store/booksSlice";
import { categories } from "../data/books";
import "./AddBook.css";

// Random cover colors for new books
const coverColors = [
  "#c0392b","#2980b9","#27ae60",
  "#8e44ad","#d35400","#16a085",
  "#e67e22","#2c3e50"
];

// Initial empty form state
const INITIAL_FORM = {
  title:       "",
  author:      "",
  category:    "",
  description: "",
  rating:      "",
};

function AddBook() {
  const dispatch  = useDispatch();  // send actions to Redux
  const navigate  = useNavigate();  // programmatic routing

  // ── Form field values ──
  const [form, setForm] = useState(INITIAL_FORM);

  // ── Validation error messages ──
  const [errors, setErrors] = useState({});

  // ── Success flash state ──
  const [submitted, setSubmitted] = useState(false);

  // ── Generic change handler for all inputs ──
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error for field as user types
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  // ── Validate all fields ──
  function validate() {
    const newErrors = {};

    if (!form.title.trim())
      newErrors.title = "Book title is required.";

    if (!form.author.trim())
      newErrors.author = "Author name is required.";

    if (!form.category)
      newErrors.category = "Please select a category.";

    if (!form.description.trim())
      newErrors.description = "Description is required.";
    else if (form.description.trim().length < 20)
      newErrors.description = "Description must be at least 20 characters.";

    const ratingNum = parseFloat(form.rating);
    if (!form.rating)
      newErrors.rating = "Rating is required.";
    else if (isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5)
      newErrors.rating = "Rating must be between 1 and 5.";

    return newErrors;
  }

  // ── Form submission handler ──
  function handleSubmit(e) {
    e.preventDefault(); // prevent page reload

    const validationErrors = validate();

    // If errors exist, show them and stop
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Build new book object
    const newBook = {
      title:       form.title.trim(),
      author:      form.author.trim(),
      category:    form.category,
      description: form.description.trim(),
      rating:      parseFloat(parseFloat(form.rating).toFixed(1)),
      // Random cover color
      cover: coverColors[Math.floor(Math.random() * coverColors.length)],
    };

    // Dispatch to Redux — prepends to books list
    dispatch(addBook(newBook));

    // Show success message then redirect
    setSubmitted(true);
    setTimeout(() => {
      // New book appears first on Browse Books page
      navigate("/books/all");
    }, 1200);
  }

  return (
    <main className="add-book fade-up">
      <div className="container">
        <div className="add-book__card">

          {/* ── Page Header ── */}
          <div className="add-book__header">
            <h1>Add a New Book</h1>
            <p>Fill in the details below to add a book to the library.</p>
          </div>

          {/* ── Success Banner ── */}
          {submitted && (
            <div className="add-book__success">
              ✅ Book added successfully! Redirecting to Browse…
            </div>
          )}

          {/* ── Book Form ── */}
          <form className="add-book__form" onSubmit={handleSubmit} noValidate>

            {/* Title */}
            <div className="form-group">
              <label htmlFor="title">Book Title <span className="req">*</span></label>
              <input
                id="title"
                name="title"
                type="text"
                placeholder="e.g. The Hitchhiker's Guide to the Galaxy"
                value={form.title}
                onChange={handleChange}
                className={errors.title ? "error" : ""}
              />
              {errors.title && <p className="form-error">{errors.title}</p>}
            </div>

            {/* Author */}
            <div className="form-group">
              <label htmlFor="author">Author <span className="req">*</span></label>
              <input
                id="author"
                name="author"
                type="text"
                placeholder="e.g. Douglas Adams"
                value={form.author}
                onChange={handleChange}
                className={errors.author ? "error" : ""}
              />
              {errors.author && <p className="form-error">{errors.author}</p>}
            </div>

            {/* Category */}
            <div className="form-group">
              <label htmlFor="category">Category <span className="req">*</span></label>
              <select
                id="category"
                name="category"
                value={form.category}
                onChange={handleChange}
                className={errors.category ? "error" : ""}
              >
                <option value="">— Select a category —</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              {errors.category && <p className="form-error">{errors.category}</p>}
            </div>

            {/* Description */}
            <div className="form-group">
              <label htmlFor="description">Description <span className="req">*</span></label>
              <textarea
                id="description"
                name="description"
                rows={4}
                placeholder="Write a brief description of the book…"
                value={form.description}
                onChange={handleChange}
                className={errors.description ? "error" : ""}
              />
              {errors.description && <p className="form-error">{errors.description}</p>}
            </div>

            {/* Rating */}
            <div className="form-group">
              <label htmlFor="rating">Rating (1 – 5) <span className="req">*</span></label>
              <input
                id="rating"
                name="rating"
                type="number"
                min="1"
                max="5"
                step="0.1"
                placeholder="e.g. 4.5"
                value={form.rating}
                onChange={handleChange}
                className={errors.rating ? "error" : ""}
              />
              {errors.rating && <p className="form-error">{errors.rating}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn-primary add-book__submit"
              disabled={submitted}
            >
              {submitted ? "Adding…" : "Add Book to Library"}
            </button>

          </form>
        </div>
      </div>
    </main>
  );
}

export default AddBook;