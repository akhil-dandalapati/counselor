import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "./App.css";
import Blog from "./components/Blog";
import Home from "./components/pages/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contacts from "./components/Contacts";
import Counselor from "./components/Counselor";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/counselor" element={<Counselor />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
