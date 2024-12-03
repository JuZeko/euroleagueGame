import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "src/components/LoginForm";

const Login = () => {
  return (
    <div className="container-fluid text-center" style={{ height: "100vh" }}>
      <div className="row h-100" style={{ flex: 1 }}>
        <div className="col-6 d-flex flex-column" style={{ flex: 1 }}>
          <div
            className="Jokic"
            style={{ backgroundColor: "	#D8D8D8", flex: 1 }}
          ></div>
          <div className="Kobe" style={{ flex: 1 }}></div>
          <div className="LebronDunk" style={{ flex: 1 }}></div>
        </div>
        <div className="col-6 d-flex flex-column" style={{ flex: 1 }}>
          <div className="d-flex flex-fill justify-content-center align-items-center">
            <div className="card p-4" style={{ width: "20vw" }}>
              <h3 className="text-center mb-4">Sveiki</h3>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
