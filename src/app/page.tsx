import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto main-container">
      <Link href="/login">
        <button className="bg-blue-500 text-white mt-2 p-2 rounded-md">
          Login
        </button>
      </Link>
      <Link href="/signup">
        <button className="bg-green-500 text-white mt-2 p-2 rounded-md">
          Signup
        </button>
      </Link>
    </main>
  );
}
