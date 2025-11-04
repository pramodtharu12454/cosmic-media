"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function SubscribeModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubscribe = () => {
    alert("Thank you for subscribing! 🎉");
    setIsOpen(false);
  };

  return (
    <>
      {/* Subscribe Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg hover:scale-105 transition-transform"
      >
        Subscribe
      </Button>

      {/* Overlay Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl p-6 w-80 shadow-xl relative">
            <h2 className="text-xl font-bold mb-4">Subscribe to Cosmic TV</h2>
            <p className="mb-6">
              Get the latest updates and notifications directly in your inbox.
            </p>

            <Button
              onClick={handleSubscribe}
              className="w-full bg-red-500 hover:bg-red-600 text-white"
            >
              Subscribe Now
            </Button>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 font-bold text-lg"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
