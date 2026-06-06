// ─── PAGE: BookDetails ────────────────────────────────────────────────────────
// Requirements covered:
//   ✅ Dynamic route /book/:id — finds book by ID from Redux store
//   ✅ Shows title, author, description, and rating
//   ✅ "Back to Browse" button returns to Browse Books page
//
// If no book found for given :id, shows a friendly error message.

import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import "./BookDetails.css";

// Helper: build star string from numeric rating
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(5 - full - (half ? 1 : 0));
}

function BookDetails() {
  // ── Get :id from URL (e.g. /book/3 → id = "3") ──
  const { id } = useParams();

  // ── Find matching book in Redux store ──
  // id from useParams is a string so we convert book.id to string
  const book = useSelector((state) =>
    state.books.books.find((b) => String(b.id) === id)
  );

  // ── Not found state ──
  if (!book) {
    return (
      <main className="details fade-up">
        <div className="container details__notfound">
          <h2>Book not found</h2>
          <p>The book with ID "{id}" doesn't exist in the library.</p>
          <Link to="/books/all" className="btn-primary">← Back to Browse</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="details fade-up">
      <div className="container">

        {/* ── Back Button ── */}
        <Link to="/books/all" className="details__back">
          ← Back to Browse
        </Link>

        {/* ── Book Detail Card ── */}
        <div className="details__card">

          {/* Left: Book Cover */}
          <div className="details__cover" style={{ background: book.cover }}>
            {book.coverImg && (
              <img
                src={book.coverImg}
                alt={book.title}
                className="details__cover-img"
                onError={(e) => { e.target.style.display = "none"; }}
              />
            )}
          </div>

          {/* Right: Book Info */}
          <div className="details__info">

            {/* Category badge */}
            <span className="details__badge">{book.category}</span>

            {/* Title */}
            <h1 className="details__title">{book.title}</h1>

            {/* Author */}
            <p className="details__author">by <strong>{book.author}</strong></p>

            {/* Rating */}
            <div className="details__rating">
              <span className="stars">{renderStars(book.rating)}</span>
              <span className="details__rating-num">{book.rating} / 5</span>
            </div>

            {/* Description */}
            <div className="details__desc">
              <h3>About this book</h3>
              <p>{book.description}</p>
            </div>

            {/* Back to Browse button */}
            <Link to="/books/all" className="btn-outline" style={{ alignSelf: "flex-start" }}>
              ← Back to Browse
            </Link>

          </div>
        </div>

      </div>
    </main>
  );
}

export default BookDetails;