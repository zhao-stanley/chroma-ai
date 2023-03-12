import Nav from "../components/Nav";
import dynamic from "next/dynamic";

export default function Home() {
  return (
    <>
      <div className="w-full h-full min-h-screen flex flex-col items-center bg-dark">
        <Nav />
        <main className="w-full h-full max-w-7xl flex flex-col gap-2 items-center px-4 py-12 sm:px-12 sm:py-24">
          <h1 className="text-white font-bold text-4xl sm:text-6xl tracking-tighter text-center">
            Generate gradients <br />
            based on
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-purple-400 ease-linear transition hover:hue-rotate-[90deg] duration-300">
              {" "}
              your mood
            </span>
          </h1>
          <p className="text-gray-200 text-sm text-center">
            Describe your day, event, or how you're feeling at the moment and
            let AI generate a gradient for you!
          </p>
        </main>
        <div className="w-full h-full max-w-7xl px-4 sm:px-12">
          <textarea className="w-full min-h-[150px] max-h-[250px] border-2 border-[#171717] rounded-xl text-white p-2 bg-dark outline-none focus-within:border-purple-400 transition ease-linear"></textarea>
        </div>
      </div>
    </>
  );
}
