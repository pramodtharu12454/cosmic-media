"use client";

import React, { useState } from "react";

const TrainingEventButtons: React.FC = () => {
  const [active, setActive] = useState<"event" | "training" | null>(null);

  const handleClick = (type: "event" | "training") => {
    // Toggle same button
    setActive((prev) => (prev === type ? null : type));
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => handleClick("event")}
          className={`px-4 py-2 rounded transition ${
            active === "event" ? "bg-green-500 text-white" : "bg-gray-200"
          }`}
        >
          Event
        </button>
        <button
          onClick={() => handleClick("training")}
          className={`px-4 py-2 rounded transition ${
            active === "training" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Training
        </button>
      </div>

      {/* Content */}
      <div className="mt-4">
        {active === "event" && (
          <div className="p-4 border border-gray-300 rounded bg-gray-50 shadow">
            <h3 className="font-semibold text-lg">Event Details</h3>
            <p className="mt-2 text-gray-700">
              Here are all the details related to events. You can list them as
              you like.
            </p>
          </div>
        )}

        {active === "training" && (
          <div className="p-4 border border-gray-300 rounded bg-gray-50 shadow">
            <h3 className="font-semibold text-lg">Training Details</h3>
            <p className="mt-2 text-gray-700">
              Here are all the training details. Add schedule, topics, or
              anything here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainingEventButtons;
