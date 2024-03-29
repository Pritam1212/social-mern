import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";

import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Messenger from "./pages/messenger/Messenger";

function App() {

  const {user} = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />}/>
        <Route path="/login" element={user? <Navigate replace to="/" /> : <Login />}/>
        <Route path="/register" element={user? <Navigate replace to="/" /> : <Register />}/>
        <Route path="/messenger" element={!user? <Navigate replace to="/" /> : <Messenger />}/>
        <Route path="/profile/:username" element={<Profile />}/>
      </Routes>
    </Router>
  );
}

export default App;
