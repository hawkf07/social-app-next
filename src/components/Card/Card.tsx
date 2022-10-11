import { useState } from "react";
import { atom, useAtom } from "jotai";

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
  title: string | null;
  description: string | JSX.Element;
  author: string | null;
  datePosted: string | Date | null;
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

const Votes = atom({
  votesCount: 10,
  votesType: 0,
});

export const VotesComponent = () => {
  const [votes, setVotes] = useAtom(Votes);
  const incrementVotes = () =>
    setVotes((prevState) =>
      prevState.votesType === 1
        ? { ...prevState, votesType: 0 }
        : { ...prevState, votesType: 1 }
    );

  const decrementVotes = () =>
    setVotes((prevState) =>
      prevState.votesType === -1
        ? { ...prevState, votesType: 0 }
        : { ...prevState, votesType: -1 }
    );

  return (
    <>
      <button onClick={() => incrementVotes()}>+1</button>
      <button onClick={() => decrementVotes()}>-1</button>
      {votes.votesCount + votes.votesType}
    </>
  );
};

export function Card({ children }: CardType) {
  const hello = trpc.useQuery(["example.hello", { text: "World from fikri" }]);

  return (
    <div className="max-w-screen container flex min-h-min flex-col justify-around gap-5 rounded p-3 ">
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
  const formatter = new Intl.RelativeTimeFormat();

  const differencePosted = new Date() - datePosted;
  const formattedDatePosted = formatter.format(
    -differencePosted / (100 * 60 * 60 * 24),
    "days"
  );
  return (
    <>
      <div className="min-w-2/5 flex w-full flex-col justify-center gap-3  rounded p-3 text-gray-200 shadow  dark:bg-gray-700 dark:shadow-gray-500 ">
        <header>
          <h1 className="text-3xl">{title}</h1>
        </header>
        <div className="flex flex-col  ">
          <p className="text-xl">{description}</p>
        </div>
        <div className="flex gap-3 border-t-2">
          <p>author : {author}</p>
          <p>date posted: {formattedDatePosted}</p>
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
