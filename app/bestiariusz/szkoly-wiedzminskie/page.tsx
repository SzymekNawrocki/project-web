// app/postacie/page.tsx
import React from 'react';

type Character = {
  name: string;
  school: string;
  image: {
    url: string;
  };
  description: {
    raw: {
      children: {
        type: string;
        children: { text: string }[];
      }[];
    };
  };
};

async function getCharacters(): Promise<Character[]> {
  const res = await fetch(process.env.HYGRAPH_API_URL as string, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query GetCharacters {
          characters(where: { name_in: ["Godryk", "Kylar", "Ryfar", "Erim", "Jasper"] }) {
            name
            school
            image {
              url
            }
            description {
              raw
            }
          }
        }
      `,
    }),
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch characters');
  }

  const json = await res.json();
  return json.data.characters;
}

export default async function Schools() {
  const characters = await getCharacters();

  return (
    <div className="max-w-6xl mx-auto p-6 py-12 md:py-24">
      <h1 className="text-5xl font-bold mb-12 text-center">Wiedźmińskie Szkoły</h1>
      <div className="grid gap-12">
        {characters.map((character) => (
          <div
            key={character.name}
            className="p-8 border border-gray-200 rounded-2xl shadow-xl flex flex-col gap-6 items-center text-center"
          >
            <div>
              <h2 className="text-3xl font-semibold mb-2">{character.name}</h2>
              {character.description?.raw?.children?.map((paragraph, index) => (
                <p key={index} className="text-white mb-2 leading-relaxed">
                  {paragraph.children?.map((child, idx) => (
                    <span key={idx}>{child.text}</span>
                  ))}
                </p>
              ))}
            </div>
            <img
              src={character.image?.url}
              alt={character.name}
              className="w-full max-w-lg h-auto rounded-xl object-cover shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
