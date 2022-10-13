import { useEffect } from "react";

function Signup() {
  return (
    <div className="newsletter">
      <h1>Recieve Latest Updates On Available Pets</h1>
      <hr></hr>
      <p>Enter your email in the box below to receive updates</p>
      <form>
        <input
          className="input"
          type="email"
          placeholder="Email"
          required
        ></input>
        <br></br>
        <button type="submit">Submit Now</button>
      </form>
    </div>
  );
}

export default Signup;
