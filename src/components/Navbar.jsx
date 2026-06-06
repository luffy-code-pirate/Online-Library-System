// ─── COMPONENT: Navbar ────────────────────────────────────────────────────────
// Appears on every page EXCEPT the 404 page.
// Contains 3 navigation links: Home, Browse Books, Add Book.
// Uses NavLink so the active link gets highlighted automatically.

import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">

        {/* Brand / Logo */}
        <NavLink to="/" className="navbar__brand">
          📚 <span>LibraryOS</span>
        </NavLink>

        {/* Navigation Links */}
        <nav className="navbar__links">
          {/* NavLink adds "active" class automatically when route matches */}
          <NavLink
            to="/"
            end
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Home
          </NavLink>

          <NavLink
            to="/books/all"
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Browse Books
          </NavLink>

          <NavLink
            to="/add"
            className={({ isActive }) =>
              isActive ? "nav-link active nav-link--cta" : "nav-link nav-link--cta"
            }
          >
            Add Book
          </NavLink>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;