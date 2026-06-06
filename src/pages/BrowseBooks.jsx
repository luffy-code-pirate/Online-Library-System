// ─── PAGE: BrowseBooks ────────────────────────────────────────────────────────
// Requirements covered:
//   ✅ Books filtered by category using dynamic route /books/:category
//   ✅ "all" category shows every book
//   ✅ Each book has "View Details" link (via BookCard → /book/:id)
//   ✅ Search bar filters books by title OR author (case-insensitive)
//
// Redux: reads state.books.books so newly added books appear here first

import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import { categories } from "../data/books";
import "./BrowseBooks.css";

function BrowseBooks() {
  // ── Dynamic route param: /books/:category ──
  const { category } = useParams(); // e.g. "Sci-Fi", "Fiction", or "all"

  // ── Search state ──
  const [query, setQuery] = useState("");

  // ── Pull books from Redux store ──
  const allBooks = useSelector((state) => state.books.books);

  // ── Step 1: Filter by category ──
  const byCategory =
    category === "all"
      ? allBooks
      : allBooks.filter((b) => b.category === category);

  // ── Step 2: Filter by search query (title or author) ──
  const filtered = byCategory.filter((b) => {
    const q = query.toLowerCase();
    return (
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q)
    );
  });

  const pageTitle = category === "all" ? "All Books" : category;

  return (
    <main className="browse fade-up">
      <div className="container">

        {/* ── Page Header ── */}
        <div className="browse__header">
          <div>
            <h1 className="browse__title">{pageTitle}</h1>
            <p className="browse__count">
              {filtered.length} book{filtered.length !== 1 ? "s" : ""} found
            </p>
          </div>

          {/* ── Search Bar ── */}
          {/* Filters books by title or author as user types */}
          <input
            type="text"
            className="browse__search"
            placeholder="Search by title or author…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* ── Category Tabs ── */}
        {/* Each tab navigates to /books/:category */}
        <div className="browse__tabs">
          <Link
            to="/books/all"
            className={`browse__tab ${category === "all" ? "active" : ""}`}
          >
            All
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/books/${cat}`}
              className={`browse__tab ${category === cat ? "active" : ""}`}
            >
              {cat}
            </Link>
          ))}
        </div>

        {/* ── Book Grid or Empty State ── */}
        {filtered.length > 0 ? (
          <div className="books-grid">
            {filtered.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div className="browse__empty">
            <p>😔 No books found for "<strong>{query}</strong>"</p>
            <button className="btn-outline" onClick={() => setQuery("")}>
              Clear Search
            </button>
          </div>
        )}

      </div>
    </main>
  );
}

export default BrowseBooks;