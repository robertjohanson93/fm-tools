import { Star, StarHalf } from 'lucide-react';
import React from 'react';

interface CoachRatingProps {
  label: string;
  value: number;
}

function CoachRating({ label, value }: CoachRatingProps): JSX.Element {
  return (
    <div className='flex justify-between'>
      <span className='text-sm'>{label}</span>
      <span className='flex'>
        {value < 30 ? (
          <Star className='fill-gray-300' color='#d1d5db' />
        ) : (
          <Star className='fill-amber-300' color='#fcd34d' />
        )}
        {value < 90 ? (
          <Star className='fill-gray-300' color='#d1d5db' />
        ) : (
          <Star className='fill-amber-300' color='#fcd34d' />
        )}
        {value < 150 ? (
          <Star className='fill-gray-300' color='#d1d5db' />
        ) : (
          <Star className='fill-amber-300' color='#fcd34d' />
        )}
        {value < 210 ? (
          <Star className='fill-gray-300' color='#d1d5db' />
        ) : (
          <Star className='fill-amber-300' color='#fcd34d' />
        )}
        {value < 270 ? (
          <Star className='fill-gray-300' color='#d1d5db' />
        ) : (
          <Star className='fill-amber-300' color='#fcd34d' />
        )}
      </span>
    </div>
  );
}

export default CoachRating;
