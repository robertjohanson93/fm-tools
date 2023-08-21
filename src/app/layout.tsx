import { ModeToggle } from '@/components/mode-toggle';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@vercel/analytics/react';
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
        <main className='flex min-h-screen w-full flex-col items-center justify-center p-4 gap-6'>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <nav className='flex justify-between items-center w-full border-b pb-4'>
              <div className='flex gap-6'>
              <a href='/' className='text-sm font-semibold hover:underline'>
                Start
              </a>
              <a
                href='/coaches'
                className='text-sm font-semibold hover:underline'
              >
                Coaching Stars
              </a>
              <a
                href='/wages'
                className='text-sm font-semibold hover:underline'
              >
                Wage Structure
              </a>
              </div>
              <div>
                <ModeToggle />
              </div>
            </nav>
            {children}
          </ThemeProvider>
        </main>
        <Analytics />
      </body>
    </html>
  );
}
