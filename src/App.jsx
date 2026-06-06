// ─── APP.JSX — ROUTING CONFIGURATION ─────────────────────────────────────────
// Sets up React Router v6 routes:
//
//   /                  → Home page
//   /books/:category   → Browse Books (dynamic: "all", "Sci-Fi", "Fiction" etc.)
//   /book/:id          → Book Details (dynamic: book by ID)
//   /add               → Add Book page
//   *                  → 404 Not Found (NO Navbar shown here)
//
// Layout wrapper: renders Navbar + <Outlet> for all pages EXCEPT 404.

import { Routes, Route, Outlet } from "react-router-dom";
import Navbar      from "./components/Navbar";
import Home        from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import AddBook     from "./pages/AddBook";
import NotFound    from "./pages/NotFound";

// Layout component: renders Navbar on top, then the matched child route below
function Layout() {
  return (
    <>
      <Navbar />  {/* Shared navigation bar — appears on all pages except 404 */}
      <Outlet />  {/* Renders the matched child route's component */}
    </>
  );
}

function App() {
  return (
    <Routes>

      {/* ── Routes WITH Navbar (inside Layout wrapper) ── */}
      <Route element={<Layout />}>
        <Route path="/"                element={<Home />}        />
        <Route path="/books/:category" element={<BrowseBooks />} />
        <Route path="/book/:id"        element={<BookDetails />} />
        <Route path="/add"             element={<AddBook />}     />
      </Route>

      {/* ── 404 Route — NO Navbar (outside Layout) ── */}
      {/* Catches any URL that doesn't match the above routes */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;