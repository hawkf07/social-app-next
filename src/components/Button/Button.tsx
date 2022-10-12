import React from "react";

interface ButtonTypes {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonTypes> = ({ children }) => {
  return (
    <>
      <button className="flex items-center gap-3 rounded-md border-gray-500 p-1 px-3 hover:bg-white/20 focus:border-[1px]">
        {children}
      </button>
    </>
  );
};
