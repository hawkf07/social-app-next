import { useState } from "react";
import { trpc } from "../../utils/trpc";
import { Form } from "../Form/Form";
import Input from "../Input/Input";
type CardType = {
  children: React.ReactNode;
};
export function Card({ children }: CardType) {
  const hello = trpc.useQuery(["example.hello", { text: "World from fikri" }]);

  return (
    <div className="container flex min-h-min justify-around gap-5 rounded bg-white p-5 shadow">
      {children}
    </div>
  );
}
