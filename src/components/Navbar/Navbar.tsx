import { signIn } from "next-auth/react";
import { useState } from "react";
import { Form } from "../Form/Form";
import Input from "../Input/Input";

export function Navbar() {
  const [inputVal, setInputVal] = useState("");
  const changeHandler = (evt: string) => setInputVal(evt);
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
        <button className="p-3 text-3xl md:hidden" onClick={() => signIn()}>
          Login
        </button>
      </nav>
    </header>
  );
}
