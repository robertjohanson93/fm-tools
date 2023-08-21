import Dashboard from '@/components/dashboard';
import React from 'react';

export default function Wages() {
  return (
    <div className='flex min-h-screen flex-col items-start gap-6'>
      <section>
        <h1 className='scroll-m-20 lg:text-5xl'>Wage Structure</h1>
        <p className='leading-7 [&:not(:first-child)]:mt-6 [&:not(:last-child)]:mb-6 w-2/3'>
          Set up a wage structure for your team. Based on the whole club, the
          first team and the youth team you can divide salaries into differrent
          player roles. Hopefully this can help you in contract negotiations, to
          not overpay certain parts of your squad and keep every player happy
          with their wage and promised playing time.
        </p>
        <p className='leading-7 [&:not(:first-child)]:mt-6 [&:not(:last-child)]:mb-6 w-2/3'>
          This page is using on a 30-30-30-10 wage structure. Of your whole wage
          budget, 30% can be used for your key players, 30% for important
          players, 30% for backup/squad players, and 10% for youth prospects.
          <br />
          In my club, key players are{' '}
          <span className='font-bold'>star players</span>; important players are
          <span className='font-bold'>important players</span> and{' '}
          <span className='font-bold'>regular starters</span>; backup/squad
          players are <span className='font-bold'>squad players</span>,{' '}
          <span className='font-bold'>fringe players</span> and{' '}
          <span className='font-bold'>breakthrough prospects</span>. Youth
          prospects are <span className='font-bold'>future prospects</span> and{' '}
          <span className='font-bold'>youngsters</span>, almost exclusively in
          my U18 squad.
        </p>
      </section>
      <section className='grid grid-cols-1 2xl:grid-cols-2 gap-4 w-full'>
        <Dashboard />
      </section>
    </div>
  );
}
