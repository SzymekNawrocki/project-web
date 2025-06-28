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
  image?: {
    url: string;
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
            image {
              url
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

export default async function Bestiary() {
  const monsters = await getMonsters();

  return (
    <div
      className="p-6 py-12 md:py-24 max-w-4xl mx-auto text-center"
      style={{
        color: 'var(--color-text)',
      }}
    >
      <h1
        className="text-4xl font-bold mb-8"
        style={{ color: 'var(--color-primary)' }}
      >
        Bestiariusz
      </h1>

      <div className="space-y-8">
        {monsters.map((monster) => (
          <div
            key={monster.name}
            className="shadow-lg rounded-2xl p-6 border flex flex-col items-center text-center"
            style={{
              borderColor: 'var(--color-dark)',
              color: 'var(--color-text)',
            }}
          >
            {monster.image?.url && (
              <img
                src={monster.image.url}
                alt={monster.name}
                className="mb-4 rounded-lg w-full max-w-xs object-cover"
                style={{ border: '2px solid var(--color-dark)' }}
              />
            )}

            <h2
              className="text-2xl font-semibold mb-1"
              style={{ color: 'var(--color-dark)' }}
            >
              {monster.name}
            </h2>
            <p
              className="text-sm italic mb-4"
              style={{ color: 'var(--color-primary)' }}
            >
              {monster.category}
            </p>

            {monster.description?.raw?.children?.map((paragraph, index) => (
              <p
                key={index}
                className="mb-2 leading-relaxed max-w-prose text-white"
              >
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
