import Dashboard from '@/components/dashboard';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className='flex min-h-screen flex-col gap-6'>
        <div>
          <h1 className='scroll-m-20 lg:text-5xl'>FM Tools</h1>
          <p className='leading-7 [&:not(:first-child)]:mt-6 [&:not(:last-child)]:mb-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            feugiat lectus non varius sodales. Sed a odio sem. Duis ut feugiat
            risus. Aliquam tincidunt odio a nisi accumsan porttitor id a felis.
          </p>
        </div>
      </div>
    </>
  );
}
