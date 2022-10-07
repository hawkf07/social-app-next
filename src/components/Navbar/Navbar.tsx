import { useState } from "react";
import { Form } from "../Form/Form";
import Input from "../Input/Input";

export function Navbar() {
  const [inputVal, setInputVal] = useState("");
  const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) =>
    setInputVal(evt);
  return (
    <header>
      <nav className="flex h-[10vh] items-center justify-around shadow-md">
        <a href="#" className="text-2xl uppercase">
          Logo
        </a>
        <Form className="flex w-3/5 items-center justify-center ">
          <Input onChange={changeHandler} type="input" />
        </Form>

        <button className="p-3 text-3xl md:hidden">=</button>
      </nav>
    </header>
  );
}