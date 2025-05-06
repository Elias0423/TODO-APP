import React, { useState, useContext } from "react";
import { INPUT_STYLE } from "../config/constants";
import { AppContext } from "../Context/AppContext";
import { saveTask } from "../services/task.service";

const SaveTask = ({ onClose }) => {
  const { setOpenModal } = useContext(AppContext);

  const [message, setMessage] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    await createTask(formData);
  };

  const createTask = async (data) => {
    const taskinfo = await saveTask(data);
    if (taskinfo.error)
      setMessage(`Ha ocurrido un error intentando crear: ${taskinfo.error}`);
    else {
      setMessage("Tarea creada correctamente");
      setFormData({
        title: "",
        description: "",
      });
    }
  };

  const handleCancel = async (e) => {
    e.preventDefault();
    setOpenModal(false);
    onClose();
  };

  return (
    <div className="flex flex-col justify-center w-md">
      <div className="text-center mb-4">
        <p className="text-gray-500">Ingresa la información de la tarea</p>
      </div>
      <div>
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto p-4 bg-white shadow-2xl rounded-xl"
        >
          <div className="mb-4">
            <p className="flex text-gray-700 font-bold mb-2">Título:</p>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Título de la tarea"
              value={formData.title}
              onChange={handleChange}
              required
              className={INPUT_STYLE}
            />
          </div>
          <div className="mb-4">
            <p className="flex text-gray-700 font-bold mb-2">Descripción:</p>
            <input
              type="description"
              id="description"
              name="description"
              placeholder="Descripción de la tarea"
              value={formData.description}
              onChange={handleChange}
              required
              className={INPUT_STYLE}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 bg-blue-500 text-white py-2 mt-5 rounded hover:bg-blue-700 cursor-pointer"
            >
              Guardar
            </button>
            <button
              onClick={handleCancel}
              className="px-6 bg-gray-500 text-white py-2 mt-5 ml-3 rounded hover:bg-gray-700 cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </form>
      </div>
      {message && (
        <div className="flex w-full max-w-md mx-auto p-4 bg-yellow-100 shadow-xl rounded-xl mt-6">
          <p> {message}</p>
        </div>
      )}
    </div>
  );
};

export { SaveTask };
