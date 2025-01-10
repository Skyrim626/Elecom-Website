import React from "react";
import Modal from "../common/Modal";
import { Button, DialogPanel } from "@headlessui/react";
import { X } from "lucide-react";

const ViewSelectedImageModal = ({
  open,
  setOpen,
  selectedImage,
  setSelectedImage,
}) => {
  const closeModal = () => {
    setSelectedImage("");
    setOpen(!open);
  };

  return (
    <Modal isModalOpen={open} setIsModalOpen={setOpen}>
      {/* Backdrop with click-to-close functionality */}
      <div
        className="fixed inset-0 bg-black bg-opacity-60 z-40 transition-opacity duration-300"
        onClick={closeModal}
      ></div>
      {/* Modal Content */}
      <DialogPanel className="fixed inset-0 flex items-center justify-center p-6 z-50">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform scale-95 duration-300 ease-in-out hover:scale-100 relative max-w-3xl sm:max-w-4xl md:max-w-5xl lg:max-w-6xl">
          {/* Close Button (X) */}
          <Button
            className="absolute top-4 right-4 text-white text-xl font-bold bg-black rounded-full p-2 hover:bg-gray-700"
            onClick={closeModal}
          >
            <X />
          </Button>

          <img
            src={selectedImage}
            alt="Selected"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </DialogPanel>
    </Modal>
  );
};

export default ViewSelectedImageModal;
