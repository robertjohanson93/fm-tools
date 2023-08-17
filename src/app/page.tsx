import Dashboard from '@/components/dashboard'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-24 gap-12">
      <div>
        <h1 className="scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-7xl">FM Tools</h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat lectus non varius sodales. 
          Sed a odio sem. Duis ut feugiat risus. Aliquam tincidunt odio a nisi accumsan porttitor id a felis.
        </p>
      </div>
      <section className='w-full'>
        <Dashboard />
      </section>
    </main>
  )
}
