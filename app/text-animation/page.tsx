'use client';

import { motion, stagger, useAnimate } from 'motion/react';
import { useEffect } from 'react';

export default function TextAnimation() {
  const text =
    "Hey! I'm Karan Singh V an AI Engineer & a Full-stack developer. I specialize in building intelligent, scalable web applications that bridge the gap between complex AI models and intuitive user experiences. With a deep passion for motion design and frontend aesthetics, I strive to create interfaces that are not just functional, but truly engaging. From architecting robust backend systems to fine-tuning neural networks and crafting fluid Framer Motion animations.";

  const [scope, animate] = useAnimate();

  useEffect(() => {
    startAnimation();
  }, []);

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
    </div>
  );
}
