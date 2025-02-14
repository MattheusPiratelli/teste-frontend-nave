import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// import { Login } from './Login'
import { Dashboard } from "./Dashboard";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Login /> */}
    <Dashboard />
  </StrictMode>
);
