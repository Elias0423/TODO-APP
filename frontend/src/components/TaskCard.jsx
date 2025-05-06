import { deleteTask, updateTaskStatus } from "../services/task.service";
import { FaTrashAlt, FaCheck, FaTimes } from "react-icons/fa";

const TaskCard = ({ task, onMessage, onUpdate }) => {
  const handleDelete = async (task) => {
    onMessage("");
    const response = await deleteTask(task.id);
    if (response.error) {
      onMessage(`Ha ocurrido un error: ${response.error}`);
    } else {
      onMessage("Tarea eliminada correctamente");
    }
    onUpdate();
  };

  const handleEdit = async (task, status) => {
    onMessage("");
    const response = await updateTaskStatus(task.id, status);
    console.log(response);
    if (response.error) {
      onMessage(`Ha ocurrido un error: ${response.error}`);
    } else {
      onMessage("Tarea actualizada correctamente");
    }
    onUpdate();
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 m-2">
      <div className="flex justify-between mt-4">
        <h2 className="text-xl font-bold text-left ">{task.title}</h2>
        <div className="text-right mt-1">
          <button
            className={`${
              task.status === "pendiente"
                ? "text-green-500 hover:text-green-700"
                : "text-gray-500 hover:text-gray-700"
            }`}
            title={
              task.status === "pendiente"
                ? "Marcar como completada"
                : "Marcar como pendiente"
            }
          >
            {task.status == "pendiente" ? (
              <FaCheck onClick={() => handleEdit(task, "completada")} />
            ) : (
              <FaTimes onClick={() => handleEdit(task, "pendiente")} />
            )}
          </button>
        </div>
      </div>
      <p className="text-gray-700 text-left mt-2 mb-4">{task.description}</p>
      <div className=""></div>

      <p className=" text-gray-500 text-xs text-right mt-5">{task.createdAt}</p>

      <div className="flex justify-between mt-2">
        <div className={`tag ${task.status} text-left`}>
          <span
            className={`inline-block px-2 py-1 text-xs font-semibold rounded ${
              task.status == "pendiente"
                ? "bg-yellow-200 text-yellow-800"
                : "bg-green-200 text-green-800"
            }`}
          >
            {task.status}
          </span>
        </div>
        <button
          onClick={() => handleDelete(task)}
          className="text-red-500 hover:text-red-700"
          title="Eliminar tarea"
        >
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export { TaskCard };
