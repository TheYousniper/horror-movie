import React from 'react'
import { FaTimes } from "react-icons/fa";

const BookModal = ({ open, onClose, children }) => {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors
      ${open ? "visible" : "invisible"}
      `}
    >
      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl shadow p-6 transition-all mt-14 ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <button
        onClick={onClose}
         className="absolute top-2 right-2 p-1 rounded-lg text-[#D31010] text-xl bg-white hover:bg-[#D31010] hover:text-white transition duration-300 ease-in-out">
          <FaTimes />
        </button>
        {children}
      </div>
    </div>
  )
}

export default BookModal