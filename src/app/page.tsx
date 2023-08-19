import Dashboard from '@/components/dashboard';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { ArrowRight, PoundSterling } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className='flex min-h-screen flex-col gap-6'>
        <div>
          <h1 className='scroll-m-20 lg:text-5xl'>FM Tools</h1>
          <p className='leading-7 [&:not(:first-child)]:mt-6 [&:not(:last-child)]:mb-6'>
            Welcome to FM Tools, gathering different tools you can use while
            playing Football Manager!
          </p>
          <p className='leading-7 [&:not(:first-child)]:mt-6 [&:not(:last-child)]:mb-6'>
            This is a project started after trying out a lot of different ways
            to enhance a Football Manager save. After growing tired of the
            different options and long lists not optimized for your club, I
            wanted to build a single place where you can get help for building a
            successful club in FM23.
          </p>
          <div className='grid gap-4'>
            <Card>
              <CardHeader>
                <CardTitle>
                  <a href='/coaches' className='flex justify-between hover:underline'>Coacing Stars<ArrowRight /></a>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Calculate how many stars your coaches will have when you
                  assign them to different training areas.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>
                  <a href='/wages' className='flex justify-between hover:underline'>Wage Structure<ArrowRight /></a>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Import your players from the game and set a wage structure to help keep your clubs finances in check.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
