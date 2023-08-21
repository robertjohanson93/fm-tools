import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Player } from './types';

export function cn(...inputs: Array<ClassValue>) {
  return twMerge(clsx(inputs));
}

export function getYouthPlayers(data: Array<Player>) {
  return data.filter((item) => {
    return (
      item.playingTime === 'Youngster' ||
      item.playingTime === 'Breakthrough Prospect'
    );
  });
}

export function getFirstTeamPlayers(data: Array<Player>) {
  return data.filter((item) => {
    return (
      item.playingTime !== 'Youngster' &&
      item.playingTime !== 'Breakthrough Prospect'
    );
  });
}
