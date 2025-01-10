import { Button, DialogPanel } from "@headlessui/react";
import { X } from "lucide-react";
import React from "react";
import Modal from "../common/Modal";

const PrimaryModal = ({
  header = "Create Organization",
  isOpen,
  setIsOpen,
  children,
}) => {
  return (
    <Modal isModalOpen={isOpen} setIsModalOpen={setIsOpen}>
      <DialogPanel className="w-full max-w-4xl rounded-sm bg-white shadow-lg max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="border-b px-4 py-3 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">{header}</h2>
          <Button
            onClick={() => setIsOpen(false)}
            className="text-red-500 hover:text-red-600"
          >
            <X size={25} />
          </Button>
        </div>

        {/* Modal Body */}
        <div className="p-4 space-y-4">{children}</div>
      </DialogPanel>
    </Modal>
  );
};

export default PrimaryModal;
