import Dashboard from '@/components/dashboard';
import React from 'react';

export default function Wages() {
  return (
    <div className='flex min-h-screen flex-col items-start gap-6'>
      <section>
        <h1 className='scroll-m-20 lg:text-5xl'>Wage Structure</h1>
      </section>
      <section className='w-full'>
        <Dashboard />
      </section>
    </div>
  );
}
