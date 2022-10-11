import React from "react";

interface ButtonTypes {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonTypes> = ({ children }) => {
  return (
    <>
      <button className="flex items-center gap-2 rounded-md border-gray-500 p-1 px-3 hover:bg-gray-600 focus:border-[1px]">
        {children}
      </button>
    </>
  );
};
