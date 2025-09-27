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
            <Route path="/courselist" element={<CourseList />} />
            <Route path="/login" element={<Login />} />
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
               <Link to="/courselist">Course List</Link>
               <Link to="/login">Login</Link>
            </li>
         </ul>
      </nav>
   );
}

function Home() {
   return <h1>Home</h1>;
}

function CourseList() {
   return <h1>Course List</h1>;
}

function Login() {
   return <h1>Log In</h1>;
}

export default App;
