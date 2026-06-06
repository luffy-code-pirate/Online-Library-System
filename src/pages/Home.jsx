// ─── PAGE: Home ───────────────────────────────────────────────────────────────
// Requirements covered:
//   ✅ Welcome message + list of book categories
//   ✅ Popular books displayed as cards with "View Details" link
//   ✅ Navbar (rendered via Layout in App.jsx)
//
// Data comes from Redux store via useSelector.
// Clicking a category navigates to /books/:category on Browse Books page.

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import { categories } from "../data/books";
import "./Home.css";

// Emoji for each category
const categoryEmoji = {
  "Fiction":     "📖",
  "Non-Fiction": "📰",
  "Sci-Fi":      "🚀",
  "Fantasy":     "🧙",
  "Mystery":     "🔍",
};

function Home() {
  // Pull all books from Redux store
  const allBooks = useSelector((state) => state.books.books);

  // Popular books = top 4 by rating
  const popular = [...allBooks]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <main className="home">

      {/* ── Hero / Welcome Section ── */}
      <section className="hero fade-up">
        <div className="container hero__inner">
          <p className="hero__eyebrow">Welcome to LibraryOS</p>
          <h1 className="hero__title">
            Your Digital <span className="hero__highlight">Library</span>
          </h1>
          <p className="hero__sub">
            Browse thousands of books across every genre. Discover new worlds,
            ideas, and stories — all in one place.
          </p>
          <div className="hero__actions">
            <Link to="/books/all" className="btn-primary">Browse Books</Link>
            <Link to="/add" className="btn-outline">+ Add a Book</Link>
          </div>
        </div>
      </section>

      {/* ── Book Categories Section ── */}
      <section className="section fade-up">
        <div className="container">
          <h2 className="section__title">Browse by Category</h2>
          <p className="section__sub">Pick a genre and dive in</p>

          {/* Each card links to /books/:category */}
          <div className="categories-grid">
            {categories.map((cat) => (
              <Link key={cat} to={`/books/${cat}`} className="category-card">
                <span className="category-card__emoji">{categoryEmoji[cat] || "📚"}</span>
                <span className="category-card__name">{cat}</span>
                <span className="category-card__count">
                  {allBooks.filter((b) => b.category === cat).length} books
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Popular Books Section ── */}
      <section className="section fade-up">
        <div className="container">
          <h2 className="section__title">Popular Books</h2>
          <p className="section__sub">Highest rated titles in our library</p>

          {/* 4 column card grid */}
          <div className="books-grid">
            {popular.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <Link to="/books/all" className="btn-outline">View All Books →</Link>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;