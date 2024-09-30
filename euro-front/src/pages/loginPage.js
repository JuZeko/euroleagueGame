import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { userLogin } from "../services/userLogin";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginData = {
    email: email, 
    password: password
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const result = await userLogin(loginData);
      if (result.status === 200) {
        console.log("Login successful:", result.data);
      } else {
      }
    } catch (error) {
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: "300px" }}>
        <h3 className="text-center mb-4">Sveiki</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="email">Vartotojo vardas</label>
            <input
              type="email"
              className="form-control"
              id="username"
              placeholder="Vartotojo vardas"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password">Slaptažodis</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Slaptažodis"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
