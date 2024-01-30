import { useState } from "react";
import Login from "./login.jsx";
import Signup from "./signup.jsx";

export default function ToggleAuthScreen() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      {isLogin ? (
        <Login onClick={toggleForm} />
      ) : (
        <Signup onClick={toggleForm} />
      )}
    </>
  );
}
