'use client'
import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { NavbarMobile } from "../sections/mobile/NavbarMobile";
import { usePathname } from 'next/navigation';
import { NavLink } from "../ui/NavLink";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-30 w-full bg-[#262626] bg-opacity-95 backdrop-blur-md shadow-md px-6 sm:px-8 py-4 flex items-center justify-between flex-wrap sm:flex-nowrap">
      <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4">
        <Image
          src="/assets/nav/logo.png"
          alt="logo"
          width={56}
          height={56}
          className="w-14 h-auto"
          priority
        />
        <NavLink href="/">
          OldWorld Codex
        </NavLink>
      </div>

      <ul className="hidden sm:flex flex-row gap-8 text-[#CAB05B] items-center">
        <li>
          <NavLink href="/knowledge">Instrukcja</NavLink>
        </li>
        <li>
          <NavLink href="/setup">Szybki Start</NavLink>
        </li>
        <li>
          <NavLink href="/bestiariusz">Bestiariusz</NavLink>
        </li>
        <li>
          <NavLink href="/inventory">Ekwipunek</NavLink>
        </li>
        <li>
          <NavLink href="/sign-in">Logowanie</NavLink>
        </li>
        <li>
          <NavLink href="/gracze">Gracze</NavLink>
        </li>
        <SignedIn>
          <li>
            <UserButton />
          </li>
        </SignedIn>
      </ul>

      <div className="sm:hidden">
        <NavbarMobile />
      </div>
    </nav>
  );
};
