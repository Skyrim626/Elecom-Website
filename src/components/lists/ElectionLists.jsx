import React from "react";
import { useLocation } from "react-router-dom";
import { formatDateOnly } from "../../utilities/formatDate";
import { Edit2 } from "lucide-react";
import { Button } from "@headlessui/react";

const ElectionLists = ({ elections = [] }) => {
  const location = useLocation();

  return (
    <div className="grid gap-4">
      {elections.map((org) => (
        <div
          key={org.id}
          className="flex justify-between items-center border border-gray-300 rounded-md p-4 shadow-sm hover:shadow-md bg-blue-900 text-gray-100"
        >
          <div>
            <h2 className="font-semibold text-lg">{org.name}</h2>
            <p className="text-sm text-gray-300">
              Date: {formatDateOnly(org.date)}
            </p>
          </div>
          <Button className="text-sm hover:text-black flex items-center gap-1">
            <Edit2 size={16} /> Edit
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ElectionLists;
