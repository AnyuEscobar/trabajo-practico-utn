import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../views/Login"
import { Home } from "../pages/Home";
import { Register } from "../pages/Register";

import { NotFound } from "../views/NotFound";
import { Dashboard } from "../pages/Dashboard";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>

  )
}

export { RouterApp }