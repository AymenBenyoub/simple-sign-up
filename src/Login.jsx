export default function Login() {
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
      </section>
    </>
  );
}
