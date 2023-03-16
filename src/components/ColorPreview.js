import { useState } from "react";

export default function ColorPreview({ color }) {
  const [copied, setCopied] = useState(false);
  return (
    <li
      className="flex flex-row gap-2 justify-center items-center hover:brightness-75 transition ease-linear cursor-pointer"
      onClick={() => {
        navigator.clipboard.writeText(color);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1000);
      }}
    >
      <div
        style={{ backgroundColor: color }}
        className={`w-6 h-6 flex flex-shrink-0 lg:w-4 lg:h-4 xl:w-6 xl:h-6 rounded-full border-2 border-[#343434]`}
      />
      <span className="text-white font-semibold text-sm">
        {copied ? "Copied!" : color.toUpperCase()}
      </span>
    </li>
  );
}
