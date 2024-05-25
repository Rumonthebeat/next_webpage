const Footer = () => {
    return (
      <footer className="bg-[#121212] text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Chuan Liu. All rights reserved.</p>
        <div className="mt-2">
          <a href="https://linkedin.com/in/chuan-liu-312950244" className="text-gray-400 hover:text-white mx-2">LinkedIn</a>
          <a href="https://www.instagram.com/rumonthetrack/" className="text-gray-400 hover:text-white mx-2">Instagram</a>
          <a href="mailto:liuchuan0508@gmail.com" className="text-gray-400 hover:text-white mx-2">Email</a>
          <a href="Chuan_Liu_CV.pdf" className="text-gray-400 hover:text-white mx-2" download="Chuan_Liu_CV.pdf">CV</a>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  