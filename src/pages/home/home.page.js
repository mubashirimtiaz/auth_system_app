import { logout } from "../../redux/Auth/authSlice";
import { useDispatch } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <p>Customer's Dashboard</p>
      <h1>Hello, welcome to home</h1>

      <button onClick={handleLogout}>sign out</button>
    </div>
  );
};

export default Home;
