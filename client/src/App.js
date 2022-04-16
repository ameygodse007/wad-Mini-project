import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import HomePage from "./components/HomePage/HomePage";
import Nav from "./components/Nav/Nav";
import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  var user = localStorage.getItem("token");

  function handlelogout() {
    localStorage.clear();
    window.location = "/";
    user = null;
  }
  return (
    <div className="App">
      <Nav user={user} handleLogout={handlelogout} />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        {user && <Route path="/main" exact element={<Main />} />}
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
