'use server';

import { get, getServerSideToken } from '@/api';
import { API_ROUTES } from '@/lib/constants';
import { CustomError, ErrorCause } from '@lib/utils';
import jwt, { type JwtPayload, TokenExpiredError } from 'jsonwebtoken';

export interface Payload extends JwtPayload {
  ticketId: number;
}

export type TicketInfo = {
  id: number;
  name: string;
  major: string;
  studentId: string;
  issued: boolean;
  turn: number;
  code: string;
  eventId: number;
};

const SECRET = process.env.NEXT_PUBLIC_JWT_SECRET;

export async function decodeTicket(qrDate: string) {
  if (!SECRET) {
    throw new CustomError(ErrorCause.NOT_FOUND, 'JWT 시크릿이 없습니다.');
  }

  try {
    const verified = jwt.verify(qrDate, SECRET);
    return verified as Payload;
  } catch (e) {
    if (e instanceof TokenExpiredError) {
      throw new CustomError(ErrorCause.EXPIRED_TOKEN);
    } else {
      throw new CustomError(ErrorCause.INVALID, '유효하지 않은 티켓입니다.');
    }
  }
}

export async function getTicketInfoByAdmin(qrDate: string) {
  const { ticketId } = await decodeTicket(qrDate);
  try {
    const info = await get<TicketInfo>(API_ROUTES.ticket.info(ticketId), {
      token: await getServerSideToken(),
    });
    return info;
  } catch {
    return null;
  }
}
