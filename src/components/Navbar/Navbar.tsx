import { signIn, signOut, useSession } from "next-auth/react";
import { FaUserCircle } from "@react-icons/all-files/fa/FaUserCircle";
import { FaDoorClosed } from "@react-icons/all-files/fa/FaDoorClosed";
import { FiLogOut } from "@react-icons/all-files/fi/FiLogOut";
import { useState } from "react";
import { Form } from "../Form/Form";
import Input from "../Input/Input";

export function Navbar() {
  const [inputVal, setInputVal] = useState("");
  const changeHandler = (evt: string) => setInputVal(evt);
  const { data } = useSession();
  return (
    <header>
      <nav className="flex h-[10vh] items-center justify-around shadow-md">
        <a href="#" className="text-2xl uppercase">
          Logo
        </a>
        <Form className="flex w-3/5 items-center justify-center ">
          <Input
            placeholder="hello world"
            onChange={changeHandler}
            type="input"
          />
        </Form>
        {data ? (
          <button className="p-3 text-3xl" onClick={() => signOut()}>
            <FiLogOut />
          </button>
        ) : (
          <button onClick={() => signIn()}>
            <FaUserCircle />
          </button>
        )}
      </nav>
    </header>
  );
}
