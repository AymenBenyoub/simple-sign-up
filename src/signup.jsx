export default function signup({ onClick }) {
  return (
    <>
      <section className="signupContainer">
        <h2> Create Account</h2>
        <div className="name-input">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <div className="signupORlogin">
          <button className="signupButton">Sign up</button>
          <button className="toggleAuth" onClick={onClick}>
            Already have an account? Login
          </button>
        </div>
      </section>
    </>
  );
}
