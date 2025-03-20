import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { Login } from "./Login";
import { Dashboard } from "./Dashboard";
import { Register } from "./Register";
import { Edit } from "./Edit";
import { Delete } from "./Delete";

import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
