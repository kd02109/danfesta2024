'use server';

import { get } from '@/api';
import { API_ROUTES } from '@/constants';

export type FestivalEvent = {
  id: number;
  name: string;
  from: string;
  to: string;
};

export default async function getEvents() {
  const events = await get<FestivalEvent[]>(API_ROUTES.ticket.event);
  return events;
}
