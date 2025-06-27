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
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Postacie</h1>
      <div className="grid gap-8">
        {characters.map((character) => (
          <div
            key={character.name}
            className="bg-white p-6 border rounded-xl shadow-md flex flex-col md:flex-row gap-4"
          >
            <img
              src={character.image?.url}
              alt={character.name}
              className="w-full md:w-48 h-auto object-cover rounded-lg"
            />
            <div>
              <h2 className="text-2xl font-semibold">{character.name}</h2>
              <p className="text-gray-500 italic mb-4">{character.school}</p>
              {character.description?.raw?.children?.map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-2">
                  {paragraph.children?.map((child, idx) => (
                    <span key={idx}>{child.text}</span>
                  ))}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
