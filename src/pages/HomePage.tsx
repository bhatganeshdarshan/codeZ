import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../components/Home";

export default function HomePage({ isDarkMode, toggleDarkMode }:any) {
  return (
    <>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Home />
      <Footer />
    </>
  );
}
