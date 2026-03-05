import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import type { Pages } from "./utils";
import { useAdmin } from "./contexts/AdminContext";
import Gallery from "./pages/Gallery";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Pages>("home");

  // Dynamic SEO Metadata Effect
  useEffect(() => {
    const pageTitles: Record<Pages, string> = {
      home: "SkyCAD | Industrial 3D Printing & Engineering",
      gallery: "Project Gallery | SkyCAD Engineering",
      contact: "Contact Us | SkyCAD Engineering",
    };

    const pageDescriptions: Record<Pages, string> = {
      home: "SkyCAD delivers high-precision industrial 3D printing and engineering solutions. Explore our custom CAD designs and rapid prototypes.",
      gallery:
        "Explore our gallery of industrial precision prints and high-performance engineering designs created using advanced 3D printing.",
      contact:
        "Get in touch with SkyCAD for your next 3D printing or industrial design project. We are ready to engineer your ideas into reality.",
    };

    document.title = pageTitles[currentPage];

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", pageDescriptions[currentPage]);
    }

    // Update Open Graph tags for better social sharing
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogTitle) ogTitle.setAttribute("content", pageTitles[currentPage]);
    if (ogDesc) ogDesc.setAttribute("content", pageDescriptions[currentPage]);
  }, [currentPage]);

  return (
    <>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === "home" && <Home setCurrentPage={setCurrentPage} />}
      {currentPage === "gallery" && <Gallery />}
      {currentPage === "contact" && <Contact />}
      <AdminLogin />
    </>
  );
}

const AdminLogin = () => {
  const { authed, login, showPrompt, setShowPrompt } = useAdmin();
  const [password, setPassword] = useState<string>("");

  if (authed) return null;

  return (
    <dialog id="admin-login" className="modal" open={showPrompt}>
      <div className="modal-box">
        <h3 className="font-bold text-lg">Admin Login</h3>
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="modal-action">
          <button className="btn btn-primary" onClick={() => login(password)}>
            Login
          </button>
          <button
            className="btn btn-ghost"
            onClick={() => setShowPrompt(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </dialog>
  );
};
