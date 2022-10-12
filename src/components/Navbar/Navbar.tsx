import { signIn, signOut, useSession } from "next-auth/react";
import { FaUserCircle } from "@react-icons/all-files/fa/FaUserCircle";
import { FaDoorClosed } from "@react-icons/all-files/fa/FaDoorClosed";
import { FiLogOut } from "@react-icons/all-files/fi/FiLogOut";
import { useState } from "react";
import { Form } from "../Form/Form";
import Input from "../Input/Input";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";
import Link from "next/link";

export function Navbar() {
  const [inputVal, setInputVal] = useState("");
  const changeHandler = (evt: string) => setInputVal(evt);
  const { data } = useSession();
  return (
    <div className="w-full border-b-2 ">
      <nav className="mx-3 flex h-[10vh] items-center justify-between ">
        <div className="flex w-2/12 items-center justify-around">
          <Link className="text-2xl uppercase" href="/">
            <a>Sciaa</a>
          </Link>
          <h2>Home</h2>
        </div>
        <Form className="flex w-3/5 items-center justify-center ">
          <div className="flex items-center gap-2 bg-white/10 p-1 rounded">
            <FaSearch className="text-gray-400" />
            <Input
              placeholder="search post/communities"
              onChange={changeHandler}
              type="input"
            />
          </div>
        </Form>
        {data ? (
          <button
            className="flex items-center gap-3 p-3"
            onClick={() => signOut()}
          >
            Logout <FiLogOut />
          </button>
        ) : (
          <button onClick={() => signIn()}>

            <FaUserCircle />
          </button>
        )}
      </nav>
    </div>
  );
}
