// app/bestiariusz/page.tsx
import React from 'react';

type Monster = {
  name: string;
  category: string;
  description: {
    raw: {
      children: {
        type: string;
        children: { text: string }[];
      }[];
    };
  };
};

async function getMonsters(): Promise<Monster[]> {
  const res = await fetch(process.env.HYGRAPH_API_URL as string, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query GetMonsters {
          monsters {
            name
            category
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
    throw new Error('Failed to fetch monsters');
  }

  const json = await res.json();
  return json.data.monsters;
}

export default async function BestiariuszPage() {
  const monsters = await getMonsters();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Bestiariusz</h1>

      <div className="space-y-8">
        {monsters.map((monster) => (
          <div key={monster.name} className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800">{monster.name}</h2>
            <p className="text-sm text-gray-500 italic mb-4">{monster.category}</p>

            {monster.description?.raw?.children?.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-2 leading-relaxed">
                {paragraph.children?.map((child, idx) => (
                  <span key={idx}>{child.text}</span>
                ))}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
