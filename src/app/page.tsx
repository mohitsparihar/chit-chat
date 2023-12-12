import ChatList from "@/components/ChatList";
import ChatSection from "@/components/ChatSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto container p-0 h-[94vh]">
      {/* navbar */}
      <Navbar />
      
      <div className="main-section flex h-full">
        {/* chat list */}
        <ChatList />
        {/* messagin space */}
        <ChatSection />
      </div>
    </main>
  );
}
