import { useState } from "react";

import { trpc } from "../../utils/trpc";
import { FaArrowUp } from "@react-icons/all-files/fa/FaArrowUp";
import { FaArrowDown } from "@react-icons/all-files/fa/FaArrowDown";
import { Form } from "../Form/Form";
import Input from "../Input/Input";
import { useVotesStore } from "../../utils/useVotesStore";
type CardType = {
  children: React.ReactNode;
};

type CardBodyType = {
  title: string;
  description: string | JSX.Element;
  author: string;
  datePosted: string;
  totalCommentCount: number;
};

type CardVotesType = {
  votes: {
    votesCount: number;
    isVoted: boolean;
  };
  onDecrementVotesClick: () => void;
  onIncrementVotesClick: () => void;
};

export function Card({ children }: CardType) {
  const hello = trpc.useQuery(["example.hello", { text: "World from fikri" }]);

  return (
    <div className="max-w-screen container flex min-h-min justify-around gap-5 rounded bg-white p-10 shadow-xl">
      {children}
    </div>
  );
}

export const CardBody: React.FC<CardBodyType> = ({
  author,
  datePosted,
  description,
  title,
  totalCommentCount,
}) => {
  return (
    <>
      <div className="min-w-2/5 flex w-full flex-col justify-center gap-3 ">
        <header>
          <h1 className="text-3xl">{title}</h1>
        </header>
        <div className="flex flex-col  text-gray-600">
          <p className="text-xl">{description}</p>
        </div>
        <div className="flex gap-3 border-t-2">
          <p>author : {author}</p>
          <p>date posted: {datePosted}</p>
          <p>comments: {totalCommentCount}</p>
        </div>
      </div>
    </>
  );
};

export const CardVotes = ({}) => {
  return (
    <>
      <div className="flex w-12 flex-col items-center justify-center gap-5">
        <button className="focus-within:text-blue-400">
          <FaArrowUp />
        </button>
        <p className="text-2xl"></p>
        <button className="focus-within:text-blue-400 ">
          <FaArrowDown />
        </button>
      </div>
    </>
  );
};
