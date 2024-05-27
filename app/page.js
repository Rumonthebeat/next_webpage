import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from './components/HomePage';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#121212]">
      <NavBar />
      <div className="container mt-24 mx-auto px-auto flex-grow">
        <HomePage />
      </div>
      <Footer />
    </div>
  );
}