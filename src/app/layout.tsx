import Sidebar from '@/components/sidebar';
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
        <main className='flex min-h-screen w-full flex-col items-start justify-center py-4 gap-6'>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <Sidebar />
            <div className='p-4 sm:ml-64 mt-14'>{children}</div>
          </ThemeProvider>
        </main>
        <Analytics />
      </body>
    </html>
  );
}
