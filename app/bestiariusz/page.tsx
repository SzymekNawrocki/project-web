'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Bestiary() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center min-h-screen pt-10 pb-6 sm:pt-16 sm:pb-2 px-4 text-white">
      <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
        Bestiariusz
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        <div
          className="cursor-pointer group rounded-2xl overflow-hidden hover:scale-[1.03] transition-transform shadow-xl bg-black"
          onClick={() => router.push('bestiariusz/szkoly-wiedzminskie')}
        >
          <div className="relative w-full hidden md:block h-[400px] lg:h-[500px]">
            <Image
              src="/assets/bestiary/school.png"
              alt="Szkoły Wiedźmińskie"
              fill
              className="object-cover"
              sizes="50vw"
              priority
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
          </div>

          <div className="p-4 text-center text-xl sm:text-2xl md:text-3xl font-bold bg-black bg-opacity-70">
            Szkoły Wiedźmińskie
          </div>
        </div>

        <div
          className="cursor-pointer group rounded-2xl overflow-hidden hover:scale-[1.03] transition-transform shadow-xl bg-black"
          onClick={() => router.push('/bestiariusz/potwory')}
        >
          <div className="relative w-full hidden md:block h-[400px] lg:h-[500px]">
            <Image
              src="/assets/bestiary/nav-photo.png"
              alt="Potwory"
              fill
              className="object-cover"
              sizes="50vw"
              priority
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
          </div>

          <div className="p-4 text-center text-xl sm:text-2xl md:text-3xl font-bold bg-black bg-opacity-70">
            Potwory
          </div>
        </div>
      </div>
    </main>
  );
}
