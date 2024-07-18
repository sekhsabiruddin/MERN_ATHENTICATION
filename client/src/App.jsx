import "tailwindcss/tailwind.css";
import Login from "./components/Login/Login";
import Signup from "./components/Singup/Singup";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Routes/ProtectedRoute";
function App() {
  return (
    <Routes>
      <Route>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/dashboard" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
