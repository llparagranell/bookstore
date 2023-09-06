import About from "./components/About";
import Category from "./components/Category";
import Contact from "./components/Contact";
import Description from "./components/Description";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/description" element={<Description />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/category" element={<Category />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
// https://www.googleapis.com/books/v1/volumes?q=intitle:"Harry+Potter"&printType=books
//
