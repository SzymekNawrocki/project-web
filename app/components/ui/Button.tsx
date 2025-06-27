import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  href?: string;
};

export const Button = (props: ButtonProps) => {
  const buttonClasses =
    "transition-all duration-300 inline-block rounded-lg border-2 border-transparent text-xl text-text bg-primary px-6 py-3 font-semibold hover:text-primary hover:bg-bg hover:border-primary disabled:bg-stone-200 disabled:text-stone-600 disabled:border-stone-200";

  if (props.href) {
    return (
      <Link href={props.href} className={buttonClasses}>
        {props.children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      disabled={props.disabled}
      onClick={props.onClick}
      className={buttonClasses}
    >
      {props.children}
    </button>
  );
};