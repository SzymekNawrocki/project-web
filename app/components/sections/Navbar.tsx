'use client'
import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { NavbarMobile } from "../sections/mobile/NavbarMobile";
import { NavLink } from "../ui/NavLink";
import Link from "next/link";

export const Navbar = () => {

  return (
    <nav className="relative top-0 z-30 w-full bg-[#262626] bg-opacity-95 backdrop-blur-md shadow-md px-6 sm:px-8 py-4 flex items-center justify-between flex-wrap sm:flex-nowrap">
  <Link href="/" className="flex items-center gap-3">
  <Image
    src="/assets/nav/logo.png"
    alt="logo"
    width={100}
    height={100}
    className="w-10 h-auto"
    priority
  />
  <span className="text-3xl font-semibold text-[#CAB05B]">
    OldWorld Codex
  </span>
</Link>


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
