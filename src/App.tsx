import { Route, Routes } from "react-router-dom"
import Allpages from "./pages/allpages"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // CSS file
import Login from "./components/login/login";
import { ToastContainer } from "react-toastify";
import Signup from "./components/signup/signup";
export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // only animate once
    });
  }, []);
  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <Routes>
        <Route path="/" element={<Allpages />} />
        <Route path="/home" element={<Allpages />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </>
  )
}
