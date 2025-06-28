import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// CREATE new player
export async function POST(request: Request) {
  const body = await request.json();
  const { name, character } = body;

  if (!name || !character) {
    return NextResponse.json({ error: 'Name and character are required' }, { status: 400 });
  }

  const newPlayer = await prisma.player.create({
    data: { name, character },
  });

  return NextResponse.json(newPlayer);
}

// READ all players
export async function GET() {
  const players = await prisma.player.findMany({
    orderBy: { joinedAt: 'desc' },
  });

  return NextResponse.json(players);
}

// UPDATE player by ID
export async function PATCH(request: Request) {
  const body = await request.json();
  const { id: idRaw, name, character } = body;
  const id = Number(idRaw);

  if (!idRaw || isNaN(id)) {
    return NextResponse.json({ error: 'Valid player ID is required' }, { status: 400 });
  }

  const updatedPlayer = await prisma.player.update({
    where: { id },
    data: {
      ...(name && { name }),
      ...(character && { character }),
    },
  });

  return NextResponse.json(updatedPlayer);
}

// DELETE player by ID (from URL query string)
export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const idParam = searchParams.get('id');
  const id = Number(idParam);

  if (!idParam || isNaN(id)) {
    return NextResponse.json({ error: 'Valid player ID is required' }, { status: 400 });
  }

  await prisma.player.delete({
    where: { id },
  });

  return NextResponse.json({ success: true });
}
