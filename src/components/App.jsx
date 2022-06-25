import React from "react";
import ListItem from "./ToDoListItem";

function App() {

    const[task, setTask] = React.useState("");
    const[tasks, setTasks] = React.useState([]); 

    function handler(event){
        const value = event.target.value;
        setTask(value); 
    }

    function addTask(){
        setTasks((prevState) => {
            return [
                ...prevState, 
                task
            ]
        });
        setTask("");
    }

    function deleteItem(id){
      setTasks(prevItems => {
        return prevItems.filter((tasks, index) => {
          return index !== id;
        });
      });
    }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={task} onChange={handler}/>
        <button onClick={addTask}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {tasks.map((oneTask,index) => {
            return(
              <ListItem 
              key={index}
              id={index}
              text = {oneTask}
              delete = {deleteItem}
              />
            )})
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
