import { useState } from "react";
import { atom, useAtom } from "jotai";

import { trpc } from "../../utils/trpc";
import { HiOutlineArrowUp } from "@react-icons/all-files/hi/HiOutlineArrowUp";
import { HiOutlineArrowDown } from "@react-icons/all-files/hi/HiOutlineArrowDown";
import { Form } from "../Form/Form";
import Input from "../Input/Input";
import { useVotesStore } from "../../utils/useVotesStore";
import { format, formatDistance, formatRelative } from "date-fns";
import { useRouter } from "next/router";
import Link from "next/link";
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

  const formattedDatePosted = formatRelative(datePosted, new Date());
  return (
    <>
      <Link className="" href={`/posts/${id}`} prefetch={true}>
        <div className="min-w-2/5 flex w-full cursor-pointer flex-col  justify-center gap-3  rounded p-3 text-gray-200 dark:bg-white/10">
          <header>
            <h1 className="text-3xl">{title}</h1>
          </header>
          <div className="flex flex-col  text-gray-300">
            <p className="text-gray-400">{description}</p>
          </div>
          <div className="flex gap-3 border-t-2 border-white/20 font-light text-gray-400">
            <p>author : {author}</p>
            <p>date posted: {formattedDatePosted}</p>
            <p>comments: {totalCommentCount}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export const CardVotes = ({ }) => {
  return (
    <>
      <div className="flex w-12 flex-col items-center justify-center gap-5">
        <button className="focus-within:text-blue-400">
          <HiOutlineArrowUp />
        </button>
        <p className="text-2xl"></p>
        <button className="focus-within:text-blue-400 ">
          <HiOutlineArrowDown />
        </button>
      </div>
    </>
  );
};
