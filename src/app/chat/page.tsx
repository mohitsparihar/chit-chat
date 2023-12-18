import ChatList from "@/components/ChatList";
import ChatSection from "@/components/ChatSection";
import Navbar from "@/components/Navbar";
import React from "react";

function page() {
  return (
    <div className="h-screen max-w-screen-xl min-w-screen-lg mx-auto">
      {/* navbar */}
      <Navbar />
      {/* chat list */}
      <div className="flex h-[94vh]">
        <ChatList />
        {/* messagin space */}
        <ChatSection />
      </div>
    </div>
  );
}

export default page;
