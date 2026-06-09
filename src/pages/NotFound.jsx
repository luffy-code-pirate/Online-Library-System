// ─── PAGE: NotFound (404) ─────────────────────────────────────────────────────
// Requirements covered:
//   ✅ Handles any undefined route via catch-all path="*" in App.jsx
//   ✅ Displays the INVALID ROUTE URL on screen (from useLocation)
//   ✅ Does NOT include Navbar (rendered outside Layout in App.jsx)
//   ✅ Includes a link back to Home page

import { Link, useLocation } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  // useLocation gives us the current URL that triggered the 404
  const location = useLocation();

  return (
    <div className="notfound fade-up">

      {/* Large 404 number */}
      <h1 className="notfound__code">404</h1>

      <h2 className="notfound__title">Page Not Found</h2>

      {/* Shows the invalid URL that was accessed */}
      <p className="notfound__url">
        The route <code>{location.pathname}</code> does not exist.
      </p>

      <p className="notfound__sub">
        Looks like you've wandered off the shelves.
      </p>

      {/* Link back to Home page */}
      <Link to="/" className="btn-primary notfound__home">
        ← Back to Home
      </Link>

    </div>
  );
}

export default NotFound;