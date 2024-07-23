import { parseISO } from "date-fns";
import { formatInTimeZone } from 'date-fns-tz';

export const formatDate = (isoDate: string): string => {
  const date = parseISO(isoDate);
  return formatInTimeZone(date, 'UTC', 'dd/MM/yyyy');
};