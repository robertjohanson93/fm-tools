import Dashboard from '@/components/dashboard';
import React from 'react';

export default function Wages() {
  return (
    <div className='flex min-h-screen flex-col items-start gap-6'>
      <section>
        <h1 className='scroll-m-20 lg:text-5xl'>Wage Structure</h1>
        <p className='leading-7 [&:not(:first-child)]:mt-6 [&:not(:last-child)]:mb-6 2xl:w-2/3'>
          Set up a wage structure for your team. Based on the whole club, the
          first team and the youth team you can divide salaries into differrent
          player roles. Hopefully this can help you in contract negotiations, to
          not overpay certain parts of your squad and keep every player happy
          with their wage and promised playing time.
        </p>
      </section>
      <section className='grid grid-cols-1 2xl:grid-cols-2 gap-4 w-full'>
        <Dashboard />
      </section>
    </div>
  );
}
