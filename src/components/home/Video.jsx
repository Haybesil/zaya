import React, { useState } from "react";
import Video from "../../../public/images/zaya-video.png";

const VideoPlayer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative py-24">
      {/* Clickable full-width image */}
      <img
        src={Video}
        alt="Video Thumbnail"
        className="w-full cursor-pointer"
        onClick={handleImageClick}
      />

      {/* Modal */}
      {isModalOpen && (
        <div className="absolute top-0 left-0 w-full flex justify-center py-8 z-50">
          <div className="relative bottom-8 w-full">
            <iframe
              className="w-full aspect-video shadow-lg"
              frameBorder="0"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Zaya AI Digital Pathology Solution"
              src="https://www.youtube.com/embed/hJrSo7ALnPE?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=1&enablejsapi=1"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
