// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Navbar} from "./components/Navbar";
import {Homepage} from "./pages/Homepage";
import {Login} from "./pages/Login";
import {Signin} from "./pages/Signin";
import { NotFound } from "./pages/NotFound";
import {Cart} from "./pages/Cart";
function App() {
  return (
    <BrowserRouter>
        <Navbar/>

      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signin" element={<Signin/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
