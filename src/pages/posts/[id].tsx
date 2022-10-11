import { FaArrowDown } from "@react-icons/all-files/fa/FaArrowDown";
import { FaArrowUp } from "@react-icons/all-files/fa/FaArrowUp";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Button } from "../../components/Button";
import { trpc } from "../../utils/trpc";

const Post: NextPage = () => {
  const { id } = useRouter().query;
  const { data } = trpc.useQuery(["posts.get-by-id", { id: id }]);
  console.log();
  return (
    <>
      <Head>
        <title>{data?.title}</title>
        <meta name="description" content={data?.title} />
      </Head>
      <div className="container flex min-h-screen  gap-3 rounded bg-gray-700 p-3">
        <div className="mx-2 flex flex-col items-center gap-3">
          <button className="text-3xl">
            <FaArrowUp />
          </button>
          <h2>{data?.votes}</h2>
          <button className="text-3xl">
            <FaArrowDown />
          </button>
        </div>
        <div className="flex flex-col gap-2 p-1">
          <header>
            <h1 className="md:text-4xl mobile:text-xl">{data?.title}</h1>
          </header>

          <blockquote>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
            repellat esse nemo praesentium quis beatae. Architecto voluptas
            incidunt a, facere harum, odio earum magni vel sunt id eum rerum
            reprehenderit.
          </blockquote>
          <div className="flex gap-2">
            <Button>Comment</Button>
            <Button>Share </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
