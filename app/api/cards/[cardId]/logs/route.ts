import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { ENTITY_TYPE } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { cardId: string } },
) {
  try {
    const { userId, orgId } = auth();

    if (!userId || !orgId) {
      return new NextResponse('Отсутствует авторизация', { status: 401 });
    }

    const auditLog = await db.auditLog.findMany({
      where: {
        orgId,
        entityId: params.cardId,
        entityType: ENTITY_TYPE.CARD,
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 3,
    });

    return NextResponse.json(auditLog);
  } catch (error) {
    return new NextResponse('На сервере ошибка', { status: 500 });
  }
}
