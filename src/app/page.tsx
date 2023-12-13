import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto main-container">
      <div className="text-3xl mb-[7rem]">
        Welcome to <span className="font-semibold">Chit-Chat</span>!
      </div>
      <Link href="/login">
        <button className="bg-blue-500 text-white mt-2 p-2 rounded-md w-[5rem]">
          Login
        </button>
      </Link>
      <Link href="/signup">
        <button className="bg-emerald-600 text-white mt-2 p-2 rounded-md w-[5rem]">
          Signup
        </button>
      </Link>
    </main>
  );
}
