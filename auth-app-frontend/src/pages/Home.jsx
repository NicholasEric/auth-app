import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Welcome to Auth App</h1>
      <p>Register or Login to continue</p>
      <Link to="/register" className="btn btn-primary m-2">Register</Link>
      <Link to="/login" className="btn btn-success">Login</Link>
    </div>
  );
};

export default Home;
