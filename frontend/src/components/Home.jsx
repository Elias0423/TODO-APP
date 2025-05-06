import React, { useEffect, useState, useContext } from "react";
import { getTasks } from "../services/task.service";
import { AppContext } from "../Context/AppContext";
import { Modal } from "./Modal";
import { SaveTask } from "./SaveTask";
import { TaskCard } from "./TaskCard";

const Home = () => {
  const { openModal, setOpenModal } = useContext(AppContext);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    setLoading(true);
    async function fetchTasks() {
      const response = await getTasks();
      if (response.error) {
        console.log(response.error);
        setMessage(`Ha ocurrido un error: ${response.error}`);
      } else {
        if (response.length === 0) {
          setMessage("No hay tareas disponibles, crea una nueva tarea");
        }
        setTasks(response);
      }
      setLoading(false);
    }
    fetchTasks();
  }, [update]);

  const handleCreate = () => {
    setMessage("");
    setOpenModal(true);
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-between items-center">
        <p className="flex text-2xl font-bold">Listado de tareas</p>
        <div>
          <button
            onClick={handleCreate}
            className=" bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer mx-3"
          >
            Crear tarea
          </button>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onMessage={setMessage}
              onUpdate={() => setUpdate(update + 1)}
            />
          ))}
        </div>
      </div>
      {loading && <p className="">Cargando...</p>}
      {message && (
        <div className="flex w-full  mx-auto p-4 bg-yellow-100 shadow-xl rounded-xl mt-6">
          <p> {message}</p>
        </div>
      )}
      <div className="flex flex-col items-center justify-center h-screen">
        {openModal && (
          <Modal>
            <SaveTask onClose={() => setUpdate(update + 1)} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export { Home };
