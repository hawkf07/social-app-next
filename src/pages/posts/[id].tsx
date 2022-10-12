import { FaArrowDown } from "@react-icons/all-files/fa/FaArrowDown";
import { FaArrowUp } from "@react-icons/all-files/fa/FaArrowUp";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { FaGift } from "@react-icons/all-files/fa/FaGift";
import { FaComment } from "@react-icons/all-files/fa/FaComment";
import { FaShare } from "@react-icons/all-files/fa/FaShare";
import { FaBookmark } from "@react-icons/all-files/fa/FaBookmark";
import { Button } from "../../components/Button";
import { trpc } from "../../utils/trpc";
import { format, formatRelative, intlFormatDistance, subDays } from "date-fns";
import { useFormatDate } from "../../utils/useFormatDate";

import { HiOutlineArrowUp } from "@react-icons/all-files/hi/HiOutlineArrowUp";
import { HiOutlineArrowDown } from "@react-icons/all-files/hi/HiOutlineArrowDown";
const Post: NextPage = () => {
  const { id } = useRouter().query;
  const { data } = trpc.useQuery(["posts.get-by-id", { id: id }]);
  const formattedDate =
    data?.datePosted && formatRelative(data?.datePosted, new Date());
  return (
    <>
      <Head>
        <title>{data?.title}</title>
        <meta name="description" content={data?.title} />
      </Head>
      <div className="container flex min-h-screen  gap-3 rounded   bg-white/20 p-3">
        <div className="mx-2 flex flex-col items-center gap-3">
          <a className="text-3xl visited:text-blue-400  " href="#">
            <HiOutlineArrowUp />
          </a>
          <h2>{data?.votes}</h2>
          <a className="text-3xl " href="#">
            <HiOutlineArrowDown />
          </a>
        </div>
        <div className="flex flex-col gap-2 p-1">
          <header>
            <p className="text-sm text-gray-500">{formattedDate}</p>
            <h1 className="md:text-4xl mobile:text-xl">{data?.title}</h1>
          </header>
          <div>
            <p className="text-gray-300">{data?.description}</p>
          </div>
          <div className="flex gap-2">
            <Button>
              <FaComment /> Comment
            </Button>
            <Button>
              <FaShare />
              Share{" "}
            </Button>
            <Button>
              <FaBookmark />
              Save
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
