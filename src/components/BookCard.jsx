// ─── COMPONENT: BookCard ──────────────────────────────────────────────────────
// A reusable card displayed on Home page and Browse Books page.
// Props:
//   book → { id, title, author, category, rating, cover, coverImg }
//
// Clicking "View Details" navigates to /book/:id (Book Details Page)

import { Link } from "react-router-dom";
import "./BookCard.css";

// Helper: generate star string from numeric rating
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(5 - full - (half ? 1 : 0));
}

function BookCard({ book }) {
  return (
    <article className="book-card fade-up">

      {/* Book Cover — shows real image if available, fallback to color */}
      <div
        className="book-card__cover"
        style={{ background: book.cover }}
      >
        {book.coverImg ? (
          // Real cover image from Open Library API
          <img
            src={book.coverImg}
            alt={book.title}
            className="book-card__cover-img"
            onError={(e) => { e.target.style.display = "none"; }} // hide if image fails
          />
        ) : null}
        <span className="book-card__category">{book.category}</span>
      </div>

      {/* Card Body */}
      <div className="book-card__body">
        <h3 className="book-card__title">{book.title}</h3>
        <p className="book-card__author">by {book.author}</p>

        {/* Star Rating */}
        <div className="book-card__rating">
          <span className="stars">{renderStars(book.rating)}</span>
          <span className="book-card__rating-num">{book.rating}</span>
        </div>

        {/* Links to Book Details page */}
        <Link to={`/book/${book.id}`} className="btn-primary book-card__btn">
          View Details →
        </Link>
      </div>

    </article>
  );
}

export default BookCard;