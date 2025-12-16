import { Routes, Route } from "react-router-dom";
import { Home, About, Locations, OurStory, Contact } from "./pages";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/ourStory" element={<OurStory />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
  );
}

export default App;
