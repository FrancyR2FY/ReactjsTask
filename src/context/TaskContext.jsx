import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";
import TaskList from "../components/TaskList";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [task, setTask] = useState([]);

  function createTask(tasks) {

    if (tasks.title == "" || tasks.description == "") {
      alert("VALLA A CAGAR");
    } else {
      setTask([
        ...task,
        {
          title: tasks.title,
          id: task.length,
          description: tasks.description,
        },
      ]);
    }
  }

  function deleteTask(taskId) {
    setTask(task.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTask(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        task,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
