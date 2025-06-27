type InputProps = {
  label?: string;
  name: string;
  type: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
};

export const Input = (props: InputProps) => {
  const labelClasses = "text-primary font-semibold text-xl mb-2";
  const inputClasses =
    "inline-block rounded-xl h-16 w-full pl-4 text-xl bg-stone-200 text-stone-800 focus:outline-primary focus:outline focus:outline-4 invalid:outline-red-500 placeholder:text-stone-500 disabled:bg-stone-400 disabled:placeholder:text-stone-600";

  return (
    <>
      {props.label && (
        <label htmlFor={props.name} className={labelClasses}>
          {props.label}
        </label>
      )}
      <input
        id={props.name}
        name={props.name}
        type={props.type}
        value={props.value ?? ""}
        placeholder={props.placeholder}
        onChange={props.onChange}
        required={props.required}
        disabled={props.disabled}
        className={inputClasses}
      />
    </>
  );
};