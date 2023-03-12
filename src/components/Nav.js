import chroma from "../../public/chroma.png";
import Image from "next/image";

export default function Nav() {
  return (
    <div className="w-full flex justify-center items-center">
      <nav className="w-full max-w-7xl p-4 sm:px-12 sm:py-6 h-fit">
        <div className="w-fit flex items-center hover:hue-rotate-[315deg] transition ease-linear duration-500">
          <Image src={chroma} className="w-12 select-none" draggable="false" />
          <span className="text-white text-2xl xl:text-3xl font-bold tracking-tighter select-none">
            Chroma AI
          </span>
        </div>
      </nav>
    </div>
  );
}
