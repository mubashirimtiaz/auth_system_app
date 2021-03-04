import { useRef, useEffect } from "react";
import { login } from "../../redux/Auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
const Button = () => {
  const { user, token } = useSelector(({ auth }) => ({
    user: auth.user,
    token: auth.token,
  }));
  const dispatch = useDispatch();
  const isFetched = useRef(false);

  //   useEffect(() => {
  //     if (isFetched.current) {
  //     } else {
  //       isFetched.current = true;
  //     }
  //   }, [user, token]);
  const handleClick = () => {
    dispatch(login({ email: "hamadpervaiz@bearplex.com", password: "1234" }));
  };
  return (
    <>
      <h1>UserName</h1>
      <p>{user}</p>
      <h1>Token</h1>
      <p>{token}</p>
      <button onClick={handleClick}>login</button>
    </>
  );
};

export default Button;
