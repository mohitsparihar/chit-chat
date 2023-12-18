import React, { useState } from "react";

const ChatList = () => {
  return (
    <div className="w-[25%] bg-blue-100">
      <div className="p-1">
        <input
          type="search"
          placeholder="Search"
          className="p-1 w-full outline-none"
        />
      </div>
      <div className="px-[2px] border-white w-full h-full">
        <div className="flex">
          <button className="bg-blue-500 text-white p-1 border-2">Chats</button>
          <button className="bg-blue-500 text-white p-1 border-2">Contacts</button>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
