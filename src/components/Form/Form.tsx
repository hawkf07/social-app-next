interface FormTypes extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

export function Form({ children }: FormTypes): JSX.Element {
  return (
    <>
      <form>{children}</form>
    </>
  );
}
