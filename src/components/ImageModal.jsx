import React, { useState } from 'react';
import { X } from 'lucide-react';

function ImageModal({ image }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Blurred Overlay with Centered Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 py-2 "
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Container */}
          <div
            className="relative bg-white rounded-lg p-4 shadow-xl max-w-full w-lg h-auto overflow-hidden p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <img
              src={image}
              alt="Expanded"
              className="w-full h-100 object-contain rounded "
            />

            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-red-600 hover:text-black  bg-red-200 rounded-full p-2"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      {/* Preview Image */}
      <img
        src={image}
        alt="Post"
        className="max-w-[60vw] max-h-[40vh]  cursor-pointer object-cover rounded"
        onClick={() => setIsOpen(true)}
      />
    </>
  );
}

export default ImageModal;
