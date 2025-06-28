'use client'
import { ClerkProvider } from '@clerk/nextjs';
import "../styles/globals.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/dm-sans/700.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { usePathname } from 'next/navigation';
import { Navbar } from "@/app/components/sections/Navbar";
import { NavbarMobile } from "@/app/components/sections/mobile/NavbarMobile";
import { Footer } from "@/app/components/sections/Footer";
import { plPL } from '@clerk/localizations';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <ClerkProvider localization={plPL}>
      <html lang="pl" className="h-full">
    <body className="bg-bg text-secondary font-sans h-full flex flex-col min-h-screen">
  {!pathname.startsWith("/knowledge") && (
    <div className="hidden sm:block">
      <Navbar />
    </div>
  )}
  <div className="block sm:hidden">
    <NavbarMobile />
  </div>
  <main className="flex-grow">
    {children}
  </main>
  {!pathname.startsWith("/knowledge") && <Footer />}
</body>
      </html>
    </ClerkProvider>
  );
}
