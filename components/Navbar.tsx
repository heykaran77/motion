'use client';

import { Command } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'motion/react';

interface NavItems {
  label: string;
  href: string;
}

const NavItems: NavItems[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
  {
    label: 'My Case Studies',
    href: '/case-studies',
  },
];

export default function Navbar() {
  const [hovered, sethovered] = useState<number | null>(null);
  return (
    <div className="pl-6 pr-1 py-1 max-w-4xl mx-auto bg-neutral-900/50 z-50 ring ring-neutral-800 fixed backdrop-blur-sm inset-x-0 top-4 rounded-full">
      <div className="flex items-center justify-between font-semibold text-base tracking-tighter">
        <div className="flex items-center gap-2">
          <Command className="size-5 text-green-300" />
          <Link href="/">heykaran</Link>
        </div>
        <div
          className="flex items-center"
          onMouseLeave={() => sethovered(null)}>
          {NavItems.map((item, idx) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-4 w-full py-2"
              onMouseEnter={() => sethovered(idx)}>
              {hovered === idx && (
                <motion.div
                  layoutId="hover"
                  transition={{
                    duration: 0.3,
                  }}
                  className="absolute inset-0 bg-green-900/20 w-full h-full rounded-full ring ring-green-300/50"
                />
              )}
              <span className="relative whitespace-nowrap">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
