import "./App.css";
import "react-toastify/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import ResultPage from "./pages/ResultPage";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/mainPage" element={<MainPage />} />
      <Route path="/resultPage" element={<ResultPage />} />
      <Route path="/adminPage" element={<AdminPage />} />
    </Routes>
  );
}

export default App;
