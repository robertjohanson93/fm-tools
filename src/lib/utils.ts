import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Player } from './types';

export function cn(...inputs: Array<ClassValue>) {
  return twMerge(clsx(inputs));
}

export function getYouthPlayers(data: Array<Player>) {
  return data.filter((item) => {
    return (
      item.playingTime === 'Youngster' || item.playingTime === 'Future Prospect'
    );
  });
}

export function getFirstTeamPlayers(data: Array<Player>) {
  return data.filter((item) => {
    return (
      item.playingTime !== 'Youngster' && item.playingTime !== 'Future Prospect'
    );
  });
}

export function getTotalSalary(data: Array<Player>): string {
  let totalSalary = 0;

  for (const player of data) {
    const cleanedSalary = player.salary
      .replace(/[^0-9.,]/g, '')
      .replace(/,/g, '')
      .replace(/\./g, '');

    const parsedSalary = parseFloat(cleanedSalary);

    if (!isNaN(parsedSalary)) {
      totalSalary += parsedSalary;
    }
  }

  return totalSalary.toLocaleString();
}
