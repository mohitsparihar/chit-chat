import React from "react";

const ChatSection = () => {
  return (
    <div className="w-[75%] border-l-2 border-blue-300 bg-blue-100 flex flex-col justify-between">
      <div className="w-100 bg-blue-400 text-blue-900 p-1 pl-2 border-blue-500">
        Chat name
      </div>
      <div className="message-section bg-blue-300 h-full">
        <div className="bg-blue-100 m-2 p-1 h-full overflow-auto">
          Message section
        </div>
      </div>
      <div className="message-input-section bg-blue-400 p-2 flex">
        <input
          className="p-1 w-full outline-none bg-blue-100"
          type="text"
          placeholder="Type your message here"
        />
        <button className="ml-2 bg-emerald-500 text-white p-1 border-2">Send</button>
      </div>
    </div>
  );
};

export default ChatSection;
