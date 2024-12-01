import "./App.css";
import "react-toastify/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./auth/ProtectedRoute";
import { AuthProvider } from "./auth/UseAuth";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import PredictionResultPage from "./pages/PredictionResultPage";
import { Secret } from "./auth/Secret";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/mainPage"
          element={
            <ProtectedRoute>
              <MainPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/secret"
          element={
            <ProtectedRoute>
              <Secret />
            </ProtectedRoute>
          }
        />
        <Route
          path="/predictionResultPage"
          element={
            <ProtectedRoute>
              <PredictionResultPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/adminPage"
          element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
