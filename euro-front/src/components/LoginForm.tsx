import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const loginData = {
    email: email,
    password: password,
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    navigate("/mainPage");
  };

  return (
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
  );
};

export default LoginForm;