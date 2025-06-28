'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
    children: React.ReactNode;
    href: string;
    className?: string;
    onClick?: () => void;
};

export const NavLink = ({ href, children, onClick, className = '' }: NavLinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    const isLogo = href === '/';

    const baseClasses = 'inline-block text-2xl transition-all duration-300';

    let combinedClasses = '';

    if (isLogo) {
        combinedClasses = `
      ${baseClasses}
      text-primary
      hover:bg-gradient-to-r hover:from-primary hover:to-bg
      hover:text-transparent hover:bg-clip-text
    `;
    } else {
        combinedClasses = `
      ${baseClasses}
      ${isActive
            ? 'bg-gradient-to-r from-primary to-bg bg-clip-text text-transparent'
            : 'text-secondary nav-hover-gradient'}
    `;
    }

    return (
        <Link
            href={href}
            onClick={onClick}
            className={`${combinedClasses} ${className}`}
        >
            {children}
        </Link>
    );
};
