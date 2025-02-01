import { BrowserRouter, Route, Routes } from "react-router-dom";

//PAGES
import Aboutus from "./pages/Aboutus";
import Blog from "./pages/Blog";
import Clientdairies from "./pages/Clientdairies";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Service from "./pages/Service";

function App() {
return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/Services" element={<Service/>} />
  <Route path="/Blog" element={<Blog/>} />
  <Route path="/Aboutus" element={<Aboutus/>} />
  <Route path="/ClientDairies" element={<Clientdairies/>} />
  <Route path="/Contact" element={<Contact/>} />
</Routes>
</BrowserRouter>
);
}

export default App;