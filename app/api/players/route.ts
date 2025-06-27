import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json();
  const { name, character } = body;

  if (!name || !character) {
    return NextResponse.json({ error: 'Name and character are required' }, { status: 400 });
  }

  const newPlayer = await prisma.player.create({
    data: { name, character }
  });

  return NextResponse.json(newPlayer);
}

export async function GET() {
  const players = await prisma.player.findMany({
    orderBy: { joinedAt: 'desc' }
  });

  return NextResponse.json(players);
}
