import "./App.css";
import { useState } from "react";
let nextId = 0;
export function Form() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <textarea
          placeholder="To do"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <br></br>
        <button
          type="submit"
          onClick={(e) => {
            setTask("");
            setTasks([...tasks, { id: nextId++, name: task }]);
          }}
        >
          Post
        </button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name}
            <button
              onClick={() => {
                setTasks(tasks.filter((t) => t.id !== task.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>To do list</h1>
      <Form></Form>
    </div>
  );
}

export default App;
