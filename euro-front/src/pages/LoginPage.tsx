import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "src/components/LoginForm";

const Login = () => {
  return (
    <div style={{ height: '100vh' }} className="d-flex">
      <div className="container-fluid h-100 BackGround">
        <div className="row h-100">
          <div
            className="col-12 d-flex align-items-center justify-content-center">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
