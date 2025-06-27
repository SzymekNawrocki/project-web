'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">

        <div
          className="cursor-pointer group rounded-2xl overflow-hidden hover:scale-105 transition-transform"
          onClick={() => router.push('bestiariusz/szkoly-wiedzminskie')}
        >
          <div className="relative w-full h-[600px]">
            <Image
              src="/assets/bestiary/schools.png"
              alt="Szkoły Wiedźmińskie"
              fill
              className="object-cover group-hover:opacity-80"
            />
          </div>
          <div className="p-4 text-center text-3xl font-bold bg-black bg-opacity-70">
            Szkoły Wiedźmińskie
          </div>
        </div>

        <div
          className="cursor-pointer group rounded-2xl overflow-hidden hover:scale-105 transition-transform"
          onClick={() => router.push('/bestiariusz/potwory')}
        >
          <div className="relative w-full h-[600px]">
            <Image
              src="/assets/bestiary/nav-photo.png"
              alt="Potwory"
              fill
              className="object-cover group-hover:opacity-80"
            />
          </div>
          <div className="p-4 text-center text-3xl font-bold bg-black bg-opacity-70">
            Potwory
          </div>
        </div>

      </div>
    </main>
  );
}
