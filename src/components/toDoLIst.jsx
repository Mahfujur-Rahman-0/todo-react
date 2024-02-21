import { useState } from "react";

export default () => {
  const [todom, settodom] = useState("");
  const [todos, settodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todom.trim());
    if (todom.trim() !== "") {
      settodos([...todos, todom]);
      settodom("");
    }
  };

  const deletBtn = (item) => {
    const updatedTodos = todos.filter((todo) => todo !== item);
    settodos(updatedTodos);
  };

  return (
    <>
      <form onSubmit={handleSubmit} action="">
        <h1 className="header">To Do List</h1>
        <div>
          <input
            onChange={(e) => {
              settodom(e.target.value);
            }}
            value={todom}
            type="text"
          />
          <button type="submit">Add</button>
        </div>
      </form>
      <div id="listItem">
        {todos.map((item, index) => (
          <p key={index}>
            {item}
            <button
              onClick={() => {
                deletBtn(item);
              }}
            >
              X
            </button>
          </p>
        ))}
      </div>
    </>
  );
};
