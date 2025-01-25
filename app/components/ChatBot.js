"use client";
import React, { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const chatBotRef = useRef(null);

  const dummyMessages = [
    { id: 1, sender: "bot", text: "Hello! How can I assist you today?" },
    {
      id: 2,
      sender: "user",
      text: "Can you tell me more about your services?",
    },
    {
      id: 3,
      sender: "bot",
      text: "Of course! We offer a variety of services tailored to your needs.",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatBotRef.current && !chatBotRef.current.contains(event.target)) {
        setIsOpen(false); // Close chatbot
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50" ref={chatBotRef}>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 p-4 rounded-full shadow-lg text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <MessageCircle size={26} />
        </button>
      )}

      {isOpen && (
        <div className="w-80 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-600 p-4 flex justify-between items-center">
            <h2 className="text-white font-semibold text-lg">ChatBot</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-300"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-4 space-y-4 h-80 overflow-y-auto">
            {dummyMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "bot" ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`${
                    msg.sender === "bot"
                      ? "bg-gray-200 text-black"
                      : "bg-blue-600 text-white"
                  } p-3 rounded-lg max-w-xs`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t flex items-center gap-2 justify-center">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div>
              <button className="bg-blue-600 text-white px-4 py-[10px] rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
