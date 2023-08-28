"use client";
import { useState } from "react";
import { EyeOpenIcon, EyeClosedIcon } from "~/components/assets/icons";

type InputProps = React.HTMLProps<HTMLInputElement> & {};

const PasswordInput = (props: InputProps) => {
  const [revealPassword, setRevealPassword] = useState(false);
  return (
    <div className="flex items-center bg-white h-10 pr-2 border border-[#CCD2E5] text-gray-900 focus-within:ring-black focus-within:ring-1 focus-within:border-black w-full placeholder:text-gray-400 rounded-md transition ease-in-out duration-200 overflow-clip">
      <input
        className="w-full h-full border-none focus:outline-none px-2 text-sm focus:ring-0"
        type={revealPassword ? "text" : "password"}
        {...props}
      />

      <button
        className="opacity-50 hover:opacity-100"
        tabIndex={-1}
        onClick={() => setRevealPassword(!revealPassword)}
      >
        {revealPassword ? (
          <EyeClosedIcon className="text-[#7D7D85]" />
        ) : (
          <EyeOpenIcon className="text-[#7D7D85]" />
        )}
      </button>
    </div>
  );
};

export default PasswordInput;
