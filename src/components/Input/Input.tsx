import { useState } from "react";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";

interface ComponentProps {
  type: string;
  /**
   * change handler take any @params value
   */
  onChange: (val: any) => void;
  placeholder: string;
}
export default function Input(props: ComponentProps) {
  const [inputType] = useState(props.type);
  const [formInputValue, setFormInputValue] = useState("");

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFormInputValue(evt.target.value);
    if (props.onChange) props.onChange(formInputValue);
  };
  return (
    <>
      <input
        placeholder={props.placeholder}
        type={inputType}
        onChange={handleChange}
        className=" p-1 text-gray-800 md:w-96 mobile:w-full"
        value={formInputValue}
        name="input-form"
      />
    </>
  );
}
