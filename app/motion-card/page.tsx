'use client';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

const Cards = [
  {
    title: 'Quality over Quantity',
    content:
      "We don't believe in one-size-fits-all. Every business has its own story, and we make sure your website tells it perfectly.",
    skeleton: <div className="h-40 w-full bg-amber-700 rounded-md"></div>,
    className: 'bg-amber-500',
    config: {
      x: 0,
      y: -20,
      rotate: -10,
    },
  },
  {
    title: 'Fast Performance',
    content:
      'Our solutions are built for speed. Experience blazing fast load times that keep your users engaged and reduce bounce rates.',
    skeleton: <div className="h-40 w-full bg-emerald-700 rounded-md"></div>,
    className: 'bg-emerald-500',
    config: {
      x: 160,
      y: -400,
      rotate: 2,
    },
  },
  {
    title: 'Seamless Integrations',
    content:
      'Connect your favorite tools effortlessly. We ensure all your systems work together in perfect harmony for maximum efficiency.',
    skeleton: <div className="h-40 w-full bg-blue-700 rounded-md"></div>,
    className: 'bg-blue-500',
    config: {
      x: 320,
      y: -800,
      rotate: -10,
    },
  },
  {
    title: 'Scalable Architecture',
    content:
      'Grow without boundaries. Built on solid foundations, our applications scale seamlessly as your business expands over time.',
    skeleton: <div className="h-40 w-full bg-violet-700 rounded-md"></div>,
    className: 'bg-violet-500',
    config: {
      x: 480,
      y: -1200,
      rotate: 15,
    },
  },
  {
    title: 'Security First',
    content:
      'Rest easy knowing your data is protected. We implement top-tier security standards to shield you from evolving threats.',
    skeleton: <div className="h-40 w-full bg-rose-700 rounded-md"></div>,
    className: 'bg-rose-500',
    config: {
      x: 640,
      y: -1600,
      rotate: -5,
    },
  },
];

export default function MotionCard() {
  return (
    <div className="max-w-4xl mx-auto h-160 relative py-32">
      {Cards.map((card, idx) => (
        <motion.div
          key={idx}
          animate={{
            x: card.config.x,
            y: card.config.y,
            rotate: card.config.rotate,
            scale: 1,
            height: 400,
            width: 320,
          }}>
          <motion.div
            className={cn(
              'w-80 h-80 p-8 absolute inset-0 flex flex-col justify-between',
              card.className,
            )}>
            {card.skeleton}
            <div>
              <h2 className="text-2xl font-medium text-left tracking-tighter">
                {card.title}
              </h2>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
