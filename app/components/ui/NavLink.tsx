import Link from "next/link";

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
};

export const NavLink = (props: NavLinkProps) => {
  const navLinkClasses =
    "gradient-hover relative inline-block overflow-hidden text-2xl text-white after:absolute after:left-0 after:top-0 after:h-full after:w-0 after:whitespace-nowrap after:bg-gradient-to-r after:from-primary after:to-bg after:bg-clip-text after:text-transparent after:content-[attr(data-text)] hover:after:w-full";

  return (
    <Link
      href={props.href}
      className={navLinkClasses}
      data-text={props.children}
    >
      {props.children}
    </Link>
  );
};