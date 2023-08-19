import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='flex min-h-screen w-full flex-col justify-center p-4 gap-12'>
          <nav className='flex gap-6'>
            <a href='/' className='hover:underline'>
              Start
            </a>
            <a href='/coaches' className='hover:underline'>
              Calculate Coacing Stars
            </a>
            <a href='/wages' className='hover:underline'>
              Wage Structure
            </a>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
