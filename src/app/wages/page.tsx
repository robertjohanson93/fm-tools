import Dashboard from '@/components/dashboard';
import React from 'react';

export default function Wages() {
  return (
    <section className='flex min-h-screen flex-col items-start gap-6'>
      <div>
        <h1 className='scroll-m-20 lg:text-5xl'>Wage Structure</h1>
        <p className='leading-7 [&:not(:first-child)]:mt-6 [&:not(:last-child)]:mb-6'>
          Set up a wage structure for your team. Based on the whole club, the
          first team and the youth team you can divide salaries into differrent
          player roles.
        </p>
      </div>
      <div className='grid grid-cols-1 2xl:grid-cols-2 gap-4 w-full'>
        <Dashboard />
      </div>
    </section>
  );
}
