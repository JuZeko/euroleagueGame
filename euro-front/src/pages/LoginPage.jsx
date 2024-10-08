import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../auth/UseAuth";
import { userLogin } from "../services/UserLoginService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const loginData = {
    email: email,
    password: password,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var result = await userLogin(loginData);

    if (result.status === 200) {
      await login({ email });
    } else {
      alert("Invalid username or password");
    }
  };
  
  return (
    <div className="container-fluid text-center" style={{  height: "100vh" }}>
      <div className="row h-100" style={{flex: 1 }}>
        <div className="col-6 d-flex flex-column" style={{border: "1rem solid",flex: 1 }}>
          <div className="Jokic" style={{backgroundColor:"	#D8D8D8", flex: 1 }}>
          </div>
          <div className="Kobe" style={{border: "1rem solid", flex: 1 }}>
          </div>
          <div className="LebronDunk" style={{ flex: 1 }}>
          </div>
        </div>
        <div
          className="col-6 d-flex flex-column"
          style={{  border: "1rem solid",  flex: 1 }}
        >
          <div className="d-flex flex-fill justify-content-center align-items-center">
            <div className="card p-4" style={{ width: "20vw" }}>
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
        </div>
      </div>
    </div>
  );
}  

export default Login;
