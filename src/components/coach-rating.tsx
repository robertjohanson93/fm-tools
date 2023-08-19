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
        {value >= 0 ? (
          <Star className='fill-amber-300' color='#fcd34d' />
        ) : (
          <Star className='fill-gray-300' color='#d1d5db' />
        )}
        {value >= 20 ? (
          <Star className='fill-amber-300' color='#fcd34d' />
        ) : (
          <Star className='fill-gray-300' color='#d1d5db' />
        )}
        {value >= 40 ? (
          <Star className='fill-amber-300' color='#fcd34d' />
        ) : (
          <Star className='fill-gray-300' color='#d1d5db' />
        )}
        {value >= 60 ? (
          <Star className='fill-amber-300' color='#fcd34d' />
        ) : (
          <Star className='fill-gray-300' color='#d1d5db' />
        )}
        {value >= 80 ? (
          <Star className='fill-amber-300' color='#fcd34d' />
        ) : (
          <Star className='fill-gray-300' color='#d1d5db' />
        )}
      </span>
    </div>
  );
}

export default CoachRating;
