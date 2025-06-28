'use client';

import { useState, useEffect } from 'react';
import { Button } from './Button';

export default function Home() {
  const [name, setName] = useState('');
  const [character, setCharacter] = useState('');
  const [players, setPlayers] = useState([]);

  const fetchPlayers = async () => {
    const res = await fetch('/api/players');
    const data = await res.json();
    setPlayers(data);
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch('/api/players', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, character }),
    });

    setName('');
    setCharacter('');
    fetchPlayers();
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl mb-4">Lista Graczy</h1>
      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <input
          type="text"
          placeholder="Twoja godność..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full text-black"
          required
        />
        <input
          type="text"
          placeholder="Postać, którą grasz..."
          value={character}
          onChange={(e) => setCharacter(e.target.value)}
          className="border p-2 w-full text-black"
          required
        />
        <Button type="submit">
          Dodaj Gracza
        </Button>
      </form>

      <h2 className="text-xl mb-2">Gracze</h2>
      <ul className="space-y-2">
        {players.map((player: any) => (
          <li key={player.id} className="border p-2 rounded">
            {player.name}  {player.character} (Dołączył: {new Date(player.joinedAt).toLocaleString()})
          </li>
        ))}
      </ul>
    </main>
  );
}
