import { useState } from "react";

export default () => {
  const [todom, settodom] = useState("");
  const [todos, settodos] = useState([]);
  var handleSubmit = (e) => {
    e.preventDefault();
    settodos([...todos, todom]);
    console.log(todos);
    settodom("");
  };
  return (
    <>
      <form onSubmit={handleSubmit} action="">
        <h1 className="header">To Do List</h1>
        <input
          onChange={(e) => {
            settodom(e.target.value);
          }}
          value={todom}
          type="text"
        />
        <button type="submit">add</button>
      </form>
      <ul>
        {todos.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};
