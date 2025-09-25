import './App.css';

import { 
   BrowserRouter, 
   Route, 
   Routes, 
   Link
} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
         <NavBar />
      </BrowserRouter>         
  );
}

function NavBar() {
   return (
      <nav>
         <ul>
            <li>
               <Link to="/">Home</Link>
            </li>
         </ul>
      </nav>
   );
}

function Home() {
   return <h1>Home</h1>;
}

export default App;
