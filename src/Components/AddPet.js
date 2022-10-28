import { useState } from "react";

function Signup() {
  const [data, setData] = useState({
    id: 0,
    name: "",
    description: "",
    gender: "",
    age: "",
    image: "",
  });

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/dogs", requestOptions)
      .then((response) => {
        window.location.reload(false);
        response.json();
      })
      .then((data) => {},
      alert(`Thank you for your interest, ${data.name} has been added!`));
  }

  return (
    <div className="newsletter">
      <h1>To add an animal for adoption</h1>
      <hr></hr>
      <p>Please submit information below</p>
      <p>*Only accepting dogs to be adopted at this time*</p>
      <form className="pet-form">
        <input
          className="input"
          type="text"
          placeholder="Name"
          value={data.name}
          required
          onChange={(e) => setData({ ...data, name: e.target.value })}
        ></input>
        <input
          className="input"
          type="text"
          placeholder="Description"
          value={data.description}
          required
          onChange={(e) => setData({ ...data, description: e.target.value })}
        ></input>
        <input
          className="input"
          type="text"
          placeholder="Gender"
          value={data.gender}
          required
          onChange={(e) => setData({ ...data, gender: e.target.value })}
        ></input>
        <input
          className="input"
          type="text"
          placeholder="Approximate Age"
          value={data.age}
          required
          onChange={(e) => setData({ ...data, age: e.target.value })}
        ></input>
        <input
          className="input"
          type="text"
          placeholder="Image"
          value={data.image}
          required
          onChange={(e) => setData({ ...data, image: e.target.value })}
        ></input>
        <br></br>
        <button onClick={handleSubmit} type="submit">
          Submit Now
        </button>
      </form>
    </div>
  );
}

export default Signup;
