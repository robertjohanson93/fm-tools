import React from 'react';

interface CoachRowProps {
  label: string;
  value: number;
}

function CoachRow({ label, value }: CoachRowProps): JSX.Element {
  let valueClassName = '';

  if (value <= 5) {
    valueClassName = 'text-[#ffc2ff]';
  } else if (value <= 10) {
    valueClassName = 'text-[#e092f5]';
  } else if (value <= 15) {
    valueClassName = 'text-[#b764ef]';
  } else {
    valueClassName = 'text-[#7c3aed]';
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
