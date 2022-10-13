import { useState } from "react";

function Signup() {
  const [value, setValue] = useState("");

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: value }),
  };
  function handleEmail(e) {
    console.log(e.target.value);
    e.preventDefault();
    fetch("http://localhost:3000/email", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

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
          value={value}
          required
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <br></br>
        <button onClick={handleEmail} type="submit">
          Submit Now
        </button>
      </form>
    </div>
  );
}

export default Signup;
