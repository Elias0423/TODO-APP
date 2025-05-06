import React from "react";
import ReactDOM from "react-dom";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gray-500 bg-opacity-25 flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl shadow-lg ">{children}</div>
    </div>,
    document.getElementById("modal")
  );
}

export { Modal };
