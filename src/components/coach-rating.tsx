import { Star, StarHalf } from 'lucide-react';
import React from 'react';

interface CoachRatingProps {
  label: string;
  value: number;
}

function CoachRating({ label, value }: CoachRatingProps): JSX.Element {
  const stars = [];
  const fullStars = Math.floor(value);
  const hasHalfStar = value % 1 !== 0;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<Star key={i} className='fill-amber-300' color='#fcd34d' />);
    } else if (i === fullStars && hasHalfStar) {
      stars.push(
        <div key={i} className='relative'>
          <StarHalf className='fill-amber-300' color='#fcd34d' />
          <StarHalf
            className='fill-gray-300 -scale-x-100 absolute top-0'
            color='#d1d5db'
          />
        </div>
      );
    } else {
      stars.push(<Star key={i} className='fill-gray-300' color='#d1d5db' />);
    }
  }

  return (
    <div className='flex justify-between'>
      <span className='text-sm'>{label}</span>
      <span className='flex'>{stars}</span>
    </div>
  );
}

export default CoachRating;
