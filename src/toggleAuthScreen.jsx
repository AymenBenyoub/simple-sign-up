import { useState } from "react";
import Login from "./Login.jsx";
import Signup from "./signup.jsx";

export default function ToggleAuthScreen() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      {isLogin ? (
        <Login toggleForm={toggleForm} />
      ) : (
        <Signup toggleForm={toggleForm} />
      )}
    </>
  );
}
