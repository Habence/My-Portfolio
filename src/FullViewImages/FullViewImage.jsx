// FullViewImage.js
import React, { useState, useEffect } from "react";

const FullViewImage = ({ src, alt, onClose }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    // Add zoom-in effect on mount
    setIsZoomed(true);
  }, []);

  const handleZoomOut = () => {
    // Add zoom-out effect on close
    setIsZoomed(false);
    setTimeout(onClose, 300); // Wait for the zoom-out transition before closing
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
      onClick={handleZoomOut}
    >
      <img
        src={src}
        alt={alt}
        className={`max-h-full max-w-full md:p-10 transform transition-transform duration-1000 ${
          isZoomed ? "scale-100" : "scale-0"
        }`}
      />
    </div>
  );
};

export default FullViewImage;
