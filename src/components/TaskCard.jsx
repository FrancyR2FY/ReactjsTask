import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask, updateTask } = useContext(TaskContext);
  const { register, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      title: task.title,
      description: task.description,
    },
  });

  const onSubmit = (data) => {
    updateTask(task.id, data.title, data.description);
    reset(); // Opcional: resetea el formulario después de guardar
    setEdit(false); // desactiva el modo de edición después de guardar
  };

  const handleEdit = () => {
    setValue("title", task.title);
    setValue("description", task.description);
    setEdit(true);
  };

  const [edit, setEdit] = useState(false);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      {edit ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="bg-gray-700 text-white p-2 rounded-md w-full mb-2"
            {...register("title", { required: true })}
          />
          <textarea
            className="bg-gray-700 text-white p-2 rounded-md w-full mb-2"
            {...register("description", { required: true })}
          ></textarea>
          <div>
            <button
              className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
              type="button"
              onClick={() => setEdit(false)}
            >
              Cancelar
            </button>
            <button
              className="bg-blue-500 px-2 py-1 mr-10 rounded-md mt-4 hover:bg-blue-400"
              type="submit"
            >
              Guardar
            </button>
          </div>
        </form>
      ) : (
        <>
          <h1 className="text-xl font-bold capitalize">{task.title}</h1>
          <p className="text-gray-500 text-sm">{task.description}</p>
          <div>
            <button
              className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
              onClick={() => deleteTask(task.id)}
            >
              Eliminar Tarea
            </button>
            <button
              className="bg-blue-500 px-2 py-1 mr-10 rounded-md mt-4 hover:bg-blue-400"
              onClick={handleEdit}
            >
              Editar Tarea
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskCard;
 

