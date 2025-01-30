import { Geist, Geist_Mono } from 'next/font/google';

import { AppHeader } from '@/components/app/app-header';
import { ThemeProvider } from '@/components/app/app-theme';
import { Toaster } from '@/components/ui/toaster';

import './globals.css';

import type { Metadata } from 'next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
        `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex w-svw flex-1 flex-col">
            <div className="flex min-h-svh flex-col">
              <div className={`
                fixed w-full bg-white/60 backdrop-blur-sm
                dark:bg-gray-600/60
              `}
              >
                <AppHeader />
              </div>
              {children}
              <Toaster />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
