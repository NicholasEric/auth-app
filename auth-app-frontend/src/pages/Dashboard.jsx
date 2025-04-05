import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login"); // Redirect to login if not authenticated
    } else {
      setUser({ email: "User" }); // Just a placeholder, replace with API call if needed
    }
  }, [navigate]);

  return (
    <div className="container mt-5">
      <h2>Dashboard</h2>
      {user ? <p>Welcome, {user.email}!</p> : <p>Loading...</p>}
      <button className="btn btn-danger" onClick={() => { localStorage.removeItem("token"); navigate("/login"); }}>Logout</button>
    </div>
  );
};

export default Dashboard;
