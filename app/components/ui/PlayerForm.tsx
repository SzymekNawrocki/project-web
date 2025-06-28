'use client';

import { useState, useEffect } from 'react';
import { Button } from './Button';

export default function Home() {
  const [name, setName] = useState('');
  const [character, setCharacter] = useState('');
  const [players, setPlayers] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchPlayers = async () => {
    const res = await fetch('/api/players');
    const data = await res.json();
    setPlayers(data);
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  const isValidInput = (value: string) => {
    const regex = /^[A-Za-zĄąĆćĘęŁłŃńÓóŚśŹźŻż\s]{3,16}$/;
    return regex.test(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidInput(name) || !isValidInput(character)) {
      setError('Imię i postać muszą mieć od 3 do 16 liter i zawierać tylko litery.');
      return;
    }

    setError(null);

    const method = editingId ? 'PATCH' : 'POST';
    const payload = editingId
      ? { id: editingId, name, character }
      : { name, character };

    await fetch('/api/players', {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    setName('');
    setCharacter('');
    setEditingId(null);
    fetchPlayers();
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/players?id=${id}`, {
      method: 'DELETE',
    });

    fetchPlayers();
  };

  const handleEdit = (player: any) => {
    setName(player.name);
    setCharacter(player.character);
    setEditingId(player.id);
    setError(null);
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl mb-4">{editingId ? 'Edytuj Gracza' : 'Dodaj Gracza'}</h1>
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
        {error && <p className="text-red-500">{error}</p>}
        <Button type="submit">{editingId ? 'Zapisz zmiany' : 'Dodaj Gracza'}</Button>
      </form>

      <h2 className="text-xl mb-2">Gracze</h2>
      <ul className="space-y-2">
        {players.map((player: any) => (
          <li key={player.id} className="border p-2 rounded flex justify-between items-center">
            <div>
              <strong>{player.name}</strong> jako <em>{player.character}</em> <br />
              <small>Dołączył: {new Date(player.joinedAt).toLocaleString()}</small>
            </div>
            <div className="flex gap-2">
              <Button onClick={() => handleEdit(player)}>Edytuj</Button>
              <Button onClick={() => handleDelete(player.id)}>
                Usuń
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
