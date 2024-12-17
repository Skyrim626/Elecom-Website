import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const Modal = ({ isModalOpen, setIsModalOpen, children }) => {
  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog
        // open={isModalOpen}
        as="div"
        onClose={() => setIsModalOpen(false)}
        className="relative z-50"
      >
        {/* Backdrop without animation */}
        <Transition.Child
          as={Fragment}
          enter="opacity-0" // no transition
          enterTo="opacity-25" // just set opacity instantly
          leave="opacity-25" // no transition
          leaveTo="opacity-0" // just set opacity instantly
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        {/* Modal Container */}
        <div>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {children}
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
