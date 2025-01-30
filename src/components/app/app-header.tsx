'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '../ui/button';
import { ModeToggle } from '../button/theme-button';

const headerOptions: { name: string; link: string }[] = [
  { name: 'Home', link: 'homepage' },
  { name: 'Project', link: 'project' },
  { name: 'Anime', link: 'anime' },
  { name: 'About', link: 'about' },
  { name: 'Settings', link: 'settings' },
];

export function AppHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="relative">
      <div className={`
        mt-0 flex select-none items-center justify-between border p-2
      `}
      >
        <div className="flex items-center gap-2">
          <Button
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            variant="outline"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>

          <div className={`
            hidden items-center gap-2
            md:flex
          `}
          >
            {headerOptions.map((option) => (

              <div
                className={`
                  p-2 text-sky-700
                  dark:text-sky-200/70
                `}
                key={option.name}
                onClick={() => { document.getElementById(option.link)?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                {option.name}
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <ModeToggle />
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className={`
          absolute left-0 top-full w-full border-x border-b bg-white
          dark:bg-black
          md:hidden
        `}
        >
          {headerOptions.map((option) => (
            <Link
              href={option.link}
              key={option.name}
              onClick={toggleMobileMenu}
            >
              <div className={`
                border-t p-4
                dark:hover:bg-gray-800
                hover:bg-gray-100
              `}
              >
                {option.name}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
