import ChatList from "@/components/ChatList";
import ChatSection from "@/components/ChatSection";
import Navbar from "@/components/Navbar";
import React from "react";

function page() {
  return (
    <div>
      {/* navbar */}
      <Navbar />

      <div className="main-section flex h-full">
        {/* chat list */}
        <ChatList />
        {/* messagin space */}
        <ChatSection />
      </div>
    </div>
  );
}

export default page;
