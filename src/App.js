
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './view/Home';
import Contact from './view/Contact';
import NavbarMenu from './components/NavbarMenu';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavbarMenu/>
    <Routes>
      <Route path="/" element={<Home />}/>          
      <Route path="/contacto" element={<Contact/>}/>
    </Routes>
       </div>
       </BrowserRouter>
  );
}


export default App;
