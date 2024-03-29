export default function login({ onClick }) {
  const h2_inlineStyle = {
    marginBottom: "40px",
    marginTop: "40px",
  };
  return (
    <>
      <section className="signupContainer">
        <h2 style={h2_inlineStyle}>Login</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <div className="signupORlogin">
          <button className="signupButton"> Login</button>
          <button className="toggleAuth" onClick={onClick}>
            Dont have an account? sign up
          </button>
        </div>
      </section>
    </>
  );
}
