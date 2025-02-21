import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { Login } from "./Login";
import { Dashboard } from "./Dashboard";
import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
