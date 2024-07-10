import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Experience from "../components/Experience";

export default function Home() {
    return (
      <div className="flex flex-col min-h-screen bg-[#121212]">
        <NavBar />
        <div className="container mt-24 mx-auto px-12 flex-grow">
          <Experience />
        </div>
        <Footer />
      </div>
    );
  }