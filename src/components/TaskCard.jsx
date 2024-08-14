import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask, updateTask } = useContext(TaskContext); // asegúrate de tener la función updateTask en tu contexto
  const [edit, setEdit] = useState(false);
  const [nuevoTitulo, setNuevoTitulo] = useState(task.title);
  const [nuevaDescripcion, setNuevaDescripcion] = useState(task.description);

  const handleGuardar = () => {
    updateTask(task.id, nuevoTitulo, nuevaDescripcion); // llama a la función de actualización con los nuevos valores
    setEdit(false); // desactiva el modo de edición después de guardar
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      {edit ? (
        <>
          <input
            className="bg-gray-700 text-white p-2 rounded-md w-full mb-2"
            value={nuevoTitulo}
            onChange={(e) => setNuevoTitulo(e.target.value)}
          />
          <textarea
            className="bg-gray-700 text-white p-2 rounded-md w-full mb-2"
            value={nuevaDescripcion}
            onChange={(e) => setNuevaDescripcion(e.target.value)}
          ></textarea>
          <div>
            <button
              className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
              onClick={() => setEdit(false)}
            >
              Cancelar
            </button>
            <button
              className="bg-blue-500 px-2 py-1 mr-10 rounded-md mt-4 hover:bg-blue-400"
              onClick={handleGuardar}
            >
              Guardar
            </button>
          </div>
        </>
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
              onClick={() => setEdit(true)}
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
