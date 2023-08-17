
import CoachForm from '@/components/coach-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FM Tools - Calculate Coaching Stars',
  description: 'Useful tools for Football Manager',
}

export default function Coaches() {
  return (
    <section className="flex min-h-screen flex-col items-start gap-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Calculate Coaching Stars</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6 [&:not(:last-child)]:mb-6">
          Use this tool to calculate how many stars your coaches will have in training.
        </p>
      </div>
      <div className="w-full lg:max-w-[75%] flex min-h-screen flex-col gap-6">
        <CoachForm />
      </div>
    </section>
  )
}
