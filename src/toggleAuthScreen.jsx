import { useState } from "react";
import Login from "./Login.jsx";
import Signup from "./signup.jsx";

export default function toggleAuthScreen() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      {isLogin ? <Login /> : <Signup />}
      <div className="signupORlogin">
        <button className="signupButton">
          {isLogin ? "Login" : "Sign up"}
        </button>
        <button className="toggleAuth" onClick={toggleForm}>
          {isLogin
            ? "Don't have an account? sign up"
            : "Already have an account? Login"}
        </button>
      </div>
    </>
  );
}
