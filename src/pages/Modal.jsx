import React from "react";

const Modal = ({ isOpen, onClose, message }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 text-center">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          <div className="bg-white p-8 rounded-lg z-50">
            <div className="text-center">{message}</div>
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
