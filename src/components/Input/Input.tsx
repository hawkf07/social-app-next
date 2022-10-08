import { useState } from "react";

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
        className="rounded-md border-2 p-2 focus:border-4 md:w-full mobile:w-full"
        value={formInputValue}
        name="input-form"
      />
    </>
  );
}
