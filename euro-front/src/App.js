import "./App.css";
import "react-toastify/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./auth/ProtectedRoute";
import { AuthProvider } from "./auth/UseAuth";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import PredictionPage from "./pages/PredictionPage";
import { Secret } from "./auth/Secret";
import PredictionTable from "./pages/PredictionTable";

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
          path="/predictionPage"
          element={
            <ProtectedRoute>
              <PredictionPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/predictionTable"
          element={
            <ProtectedRoute>
              <PredictionTable />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
