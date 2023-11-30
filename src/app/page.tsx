import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto main-container">
      <h1 className="text-4xl mb-7">Chit Chat</h1>
      <Link href="/login">
        <button className="bg-blue-500 text-white mt-2 p-2 rounded-md">
          Login
        </button>
      </Link>
      <Link href="/signup">
        <button className="bg-emerald-600 text-white mt-2 p-2 rounded-md">
          Signup
        </button>
      </Link>
    </main>
  );
}
