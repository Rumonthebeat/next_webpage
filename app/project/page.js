import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Project from '../components/Project'

export default function Home() {
    return (
      <div className="flex flex-col min-h-screen bg-[#121212]">
        <NavBar />
        <div className="container mt-24 mx-auto px-12 flex-grow">
          <Project />
        </div>
        <Footer />
      </div>
    );
  }