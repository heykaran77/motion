'use client';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion, scale } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

interface CardInterface {
  title: string;
  content: string;
  skeleton: React.ReactNode;
  className: string;
  config: {
    x: number;
    y: number;
    rotate: number;
    z: number;
  };
}

const Cards: CardInterface[] = [
  {
    title: 'Quality over Quantity',
    content:
      "We don't believe in one-size-fits-all. Every business has its own story, and we make sure your website tells it perfectly.",
    skeleton: (
      <div className="h-40 w-full bg-amber-700 rounded-md relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(255,255,255,0.1)_4px,rgba(255,255,255,0.1)_8px)]"></div>
      </div>
    ),
    className: 'bg-amber-500',
    config: {
      x: 0,
      y: -20,
      rotate: -5,

      z: 2,
    },
  },
  {
    title: 'Fast Performance',
    content:
      'Our solutions are built for speed. Experience blazing fast load times that keep your users engaged and reduce bounce rates.',
    skeleton: (
      <div className="h-40 w-full bg-emerald-700 rounded-md relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(255,255,255,0.1)_4px,rgba(255,255,255,0.1)_8px)]"></div>
      </div>
    ),
    className: 'bg-emerald-500',
    config: {
      x: 180,
      y: 20,
      rotate: 2,
      z: 3,
    },
  },
  {
    title: 'Seamless Integrations',
    content:
      'Connect your favorite tools effortlessly. We ensure all your systems work together in perfect harmony for maximum efficiency.',
    skeleton: (
      <div className="h-40 w-full bg-blue-700 rounded-md relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(255,255,255,0.1)_4px,rgba(255,255,255,0.1)_8px)]"></div>
      </div>
    ),
    className: 'bg-blue-500',
    config: {
      x: 360,
      y: -30,
      rotate: -5,
      z: 4,
    },
  },
  {
    title: 'Scalable Architecture',
    content:
      'Grow without boundaries. Built on solid foundations, our applications scale seamlessly as your business expands over time.',
    skeleton: (
      <div className="h-40 w-full bg-violet-700 rounded-md relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(255,255,255,0.1)_4px,rgba(255,255,255,0.1)_8px)]"></div>
      </div>
    ),
    className: 'bg-violet-500',
    config: {
      x: 640,
      y: 20,
      rotate: 4,
      z: 5,
    },
  },
  {
    title: 'Security First',
    content:
      'Rest easy knowing your data is protected. We implement top-tier security standards to shield you from evolving threats.',
    skeleton: (
      <div className="h-40 w-full bg-rose-700 rounded-md relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(255,255,255,0.1)_4px,rgba(255,255,255,0.1)_8px)]"></div>
      </div>
    ),
    className: 'bg-rose-500',
    config: {
      x: 780,
      y: -20,
      rotate: -5,
      z: 6,
    },
  },
];

export default function MotionCards() {
  const [active, setActive] = useState<null | CardInterface>(null);

  const modalRef = useRef<HTMLDivElement>(null);

  const anyCardActive = () => {
    return active !== null;
  };

  const currentActiveCard = (card: CardInterface) => {
    return active?.title === card.title;
  };
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setActive(null);
      }
    };
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div ref={modalRef} className="max-w-5xl w-full mx-auto h-120 relative">
      {Cards.map((card, idx) => (
        <motion.div key={idx}>
          <motion.button
            onClick={() => setActive(card)}
            initial={{
              y: 200,
              x: 0,
              scale: 0,
              filter: 'blur(10px)',
            }}
            animate={{
              x: currentActiveCard(card)
                ? 320
                : anyCardActive()
                  ? card.config.x * 0.45 + 200
                  : card.config.x,
              y: currentActiveCard(card)
                ? -100
                : anyCardActive()
                  ? 220
                  : card.config.y,
              rotate: currentActiveCard(card)
                ? 0
                : anyCardActive()
                  ? card.config.rotate * 0.4
                  : card.config.rotate,
              height: currentActiveCard(card) ? 500 : 380,
              width: currentActiveCard(card) ? 400 : 300,
              filter: 'blur(0px)',
              scale: currentActiveCard(card) ? 0.7 : anyCardActive() ? 0.7 : 1,
            }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 15,
            }}
            whileHover={{
              scale: currentActiveCard(card)
                ? 0.7
                : anyCardActive()
                  ? 0.75
                  : 1.05,
            }}
            style={{
              zIndex: active?.config.z,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className={cn(
              'w-80 p-4 flex cursor-pointer flex-col justify-start gap-4 rounded-lg absolute inset-0 overflow-hidden',
              card.className,
            )}>
            {card.skeleton}
            <AnimatePresence mode="popLayout">
              <motion.h4
                key={card.title + 'title'}
                layoutId={card.title + 'title'}
                className="text-xl text-left font-bold tracking-tighter text-neutral-50">
                {card.title}
              </motion.h4>
              {anyCardActive() && (
                <motion.p
                  key={card.title + 'des'}
                  layoutId={card.title + 'des'}
                  initial={{
                    x: 0,
                    y: 20,
                    opacity: 0,
                    filter: 'blur(10px)',
                  }}
                  animate={{
                    x: 0,
                    y: 0,
                    opacity: 1,
                    filter: 'blur(0px)',
                  }}
                  exit={{
                    x: 0,
                    y: 20,
                    opacity: 0,
                    filter: 'blur(10px)',
                  }}
                  className="text-neutral-50 text-left font-medium tracking-tight">
                  {card.content}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      ))}
    </div>
  );
}
