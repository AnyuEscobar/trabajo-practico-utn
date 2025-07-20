import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "../views/Login"
import { Home } from "../views/Home";
import { Register } from "../views/Register";
import { Header } from "../components/Header";
import { NotFound } from "../views/NotFound";
import { Layout } from "../components/Layout";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route element={<Layout />} />
      </Routes>
    </BrowserRouter>

  )
}

export { RouterApp }