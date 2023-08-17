import Dashboard from '@/components/dashboard'
import React from 'react'

export default function Wages() {
  return (
   <section className='flex min-h-screen flex-col gap-6'>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>Wage Structure</h1>
      <Dashboard />
   </section>
  )
}
