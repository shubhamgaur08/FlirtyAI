import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import  Home  from "./components/Pages/Home";
import  About  from "./components/Pages/About";

import { Contact } from "./components/Pages/Contact";

import Footer from "./components/Footer";
import ChatSuggest from "./components/Pages/ChatSuggest";
function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
           <Route path="/Chatsuggest" element={<ChatSuggest />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

        
        </div>
        
      </Router>
      
  </>
  );
}

export default App;
