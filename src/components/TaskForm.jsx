import { useForm } from "react-hook-form";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const { register, handleSubmit, reset } = useForm();
  const { createTask } = useContext(TaskContext);

  const onSubmit = (data) => {
    createTask({
      title: data.title,
      description: data.description,
    });
    reset();
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          placeholder="escribe tu tarea"
          {...register("title", { required: true })}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          {...register("description", { required: true })}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
