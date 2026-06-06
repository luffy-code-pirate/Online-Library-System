// ─── MAIN.JSX — APP ENTRY POINT ──────────────────────────────────────────────
// Wraps the entire application with:
//   1. <Provider store={store}> — makes Redux state available everywhere
//   2. <BrowserRouter>          — enables client-side routing via React Router
//
// Also imports the global CSS file.

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";
import "./styles/global.css"; // global styles and CSS variables

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Redux Provider: makes store accessible to every component */}
    <Provider store={store}>
      {/* BrowserRouter: enables URL-based routing throughout the app */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);