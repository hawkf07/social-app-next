import { useState } from "react";
import { atom, useAtom } from "jotai";

import { trpc } from "../../utils/trpc";
import { FaArrowUp } from "@react-icons/all-files/fa/FaArrowUp";
import { FaArrowDown } from "@react-icons/all-files/fa/FaArrowDown";
import { Form } from "../Form/Form";
import Input from "../Input/Input";
import { useVotesStore } from "../../utils/useVotesStore";
import { format, formatDistance, formatRelative } from "date-fns";
import { useRouter } from "next/router";
type CardType = {
  children: React.ReactNode;
};

type CardBodyType = {
  title: string | null;
  description: string | JSX.Element;
  author: string | null;
  id: string;
  datePosted: Date | number;
  totalCommentCount: number;
  onClickHandler: () => void;
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
  return (
    <div className="max-w-screen container flex min-h-min flex-col items-center justify-center gap-5 rounded p-3 ">
      {children}
    </div>
  );
}

export const CardBody: React.FC<CardBodyType> = ({
  author,
  datePosted,
  description,
  title,
  id,
  totalCommentCount,
  onClickHandler,
}) => {
  const router = useRouter();

  const formattedDatePosted = formatRelative(datePosted, new Date());
  return (
    <>
      <div
        onClick={() => onClickHandler && onClickHandler()}
        className="min-w-2/5 flex w-full flex-col  justify-center gap-3  rounded p-3 text-gray-200 shadow  dark:bg-gray-700 dark:shadow-gray-500 "
      >
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
