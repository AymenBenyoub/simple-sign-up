export default function Login() {
  const toggleMessage = "Don't have an account? sign-up now";
  return (
    <>
      <section className="signupContainer">
        <h2>Login</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="signupButton">Login</button>
        <button className="toggleAuth">{toggleMessage}</button>
      </section>
    </>
  );
}
