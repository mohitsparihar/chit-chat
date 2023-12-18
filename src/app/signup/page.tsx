import SignupComponent from "../../components/Signup";

export default function Signup() {
  return (
    <main className="min-h-screen flex flex-col justify-center h-screen">
      <div className="text-3xl font-semibold p-3">Chit-Chat</div>
      <div className="mx-auto flex flex-col justify-center align-middle h-full">
        <SignupComponent />
      </div>
    </main>
  );
}
