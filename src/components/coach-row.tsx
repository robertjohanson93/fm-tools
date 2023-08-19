import React from 'react';

interface CoachRowProps {
  label: string;
  value: number;
}

function CoachRow({ label, value }: CoachRowProps): JSX.Element {
  let valueClassName = '';

  if (value <= 5) {
    valueClassName = 'text-gray-500';
  } else if (value <= 10) {
    valueClassName = 'text-black';
  } else if (value <= 15) {
    valueClassName = 'text-amber-400';
  } else {
    valueClassName = 'text-green-500';
  }

  return (
    <div className='flex justify-between'>
      <span className='text-sm sm:text-base'>{label}</span>
      <span className={`text-sm sm:text-base font-extrabold ${valueClassName}`}>
        {value}
      </span>
    </div>
  );
}

export default CoachRow;
