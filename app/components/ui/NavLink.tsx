import Link from "next/link";

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
};

export const NavLink = (props: NavLinkProps) => {
  const navLinkClasses = `
    relative inline-block text-2xl text-white
    after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0
    after:bg-[#CAB05B] after:transition-all after:duration-300
    hover:after:w-full
  `;

  return (
    <Link
      href={props.href}
      className={navLinkClasses}
      onClick={props.onClick}
    >
      {props.children}
    </Link>
  );
};
