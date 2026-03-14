'use client';

import { Button } from '@/components/ui/button';
import { Loader } from 'lucide-react';
import { AnimationSequence, motion, stagger, useAnimate } from 'motion/react';
import { useEffect } from 'react';

export default function TextAnimation() {
  const text =
    "Hey! I'm Karan Singh V an AI Engineer & a Full-stack developer. I specialize in building intelligent, scalable web applications that bridge the gap between complex AI models and intuitive user experiences. With a deep passion for motion design and frontend aesthetics, I strive to create interfaces that are not just functional, but truly engaging. From architecting robust backend systems to fine-tuning neural networks and crafting fluid Framer Motion animations.";

  const [scope, animate] = useAnimate();

  useEffect(() => {
    startAnimation();
  }, []);

  const sequence: AnimationSequence = [
    [
      '.loader',
      {
        display: 'inline-flex',
        opacity: 1,
        width: '1rem',
        filter: 'blur(0px)',
      },
      {
        duration: 0.3,
      },
    ],
    [
      '.loader',
      {
        rotate: 360 * 3,
      },
      {
        duration: 2,
        ease: 'linear',
      },
    ],
    [
      '.loader',
      {
        opacity: 0,
      },
      {
        duration: 0.3,
      },
    ],
    [
      '.text',
      {
        opacity: 0,
        filter: 'blur(10px)',
      },
      {
        duration: 0.5,
        ease: 'linear',
      },
    ],
    [
      '.button',
      {
        width: '36px',
        borderRadius: '100px',
      },
      {
        duration: 0.3,
        ease: 'linear',
        at: '-0.8',
      },
    ],
  ];

  const startSequence = () => {
    animate(sequence);
  };

  const startAnimation = () => {
    animate(
      'span',
      {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
      },
      {
        duration: 0.5,
        ease: 'easeInOut',
        delay: stagger(0.02),
      },
    );
  };

  return (
    <div
      ref={scope}
      className="py-44 px-6 max-w-4xl mx-auto font-medium leading-relaxed text-2xl tracking-tighter">
      {text.split(' ').map((word, idx) => (
        <motion.span
          key={idx + word}
          style={{
            opacity: 0,
            filter: 'blur(10px)',
            y: 10,
            display: 'inline-block',
          }}>
          {word} &nbsp;
        </motion.span>
      ))}
      <div className="mt-10 relative bg-neutral-900/50 ring ring-neutral-800 rounded-xl flex items-center h-20 w-full max-w-xl mx-auto divide-x-2 divide-emerald-300">
        <div className="flex-1 flex justify-center items-center">
          <h4 className="font-medium">
            Total:{' '}
            <span className="font-semibold not-italic text-emerald-300">
              $109
            </span>
          </h4>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Button
            style={{
              width: '200px',
            }}
            onClick={startSequence}
            className="button cursor-pointer relative w-full max-w-[200px] flex items-center gap-2"
            variant={'outline'}>
            <Loader
              className="loader text-neutral-800"
              style={{
                display: 'none',
                width: '0rem',
                opacity: 0,
                filter: 'blur(10px)',
              }}
            />
            <span
              className="text text-lg font-medium text-neutral-800"
              style={{
                filter: 'blur(0px)',
              }}>
              Pay now
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
