import LoginComponent from "../../components/Login";

export default function Login() {
  return (
    <main className="min-h-screen flex flex-col justify-center h-screen">
      <div className="text-3xl font-semibold p-3">Chit-Chat</div>
      <div className="mx-auto flex flex-col justify-center align-middle h-full">
        <LoginComponent />
      </div>
    </main>
  );
}
