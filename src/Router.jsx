// Router.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Gallery from "./pages/Gallery";
import Enquiry from "./pages/Enquiry";
import Contact from "./pages/Contact";
const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/services/:serviceId" element={<ServiceDetail />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/enquiry" element={<Enquiry />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

export default AppRouter;
