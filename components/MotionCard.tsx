'use client';

import { FolderCode, LayoutDashboard } from 'lucide-react';
import { CircleArrowOutUpLeft, Command } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

export default function MotionCard() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98,
              filter: 'blur(10px)',
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: 'blur(0px)',
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              filter: 'blur(10px)',
            }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
            className="flex flex-col h-90 w-64 bg-neutral-200 ring ring-neutral-300 space-y-4 rounded-lg p-4">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-neutral-500 text-center">
                Hey! i'm Karan
              </h2>
              <p className="text-sm font-medium text-neutral-400 text-center">
                This is my card
              </p>
            </div>

            <div className="flex items-center justify-center">
              <motion.button
                whileTap={{
                  scale: 0.95,
                }}
                transition={{
                  duration: 0.1,
                  ease: 'easeIn',
                }}
                onClick={() => setIsOpen(false)}
                className="bg-neutral-600 font-medium tracking-tight px-2 py-1 cursor-pointer rounded-md text-sm">
                {isOpen ? 'Close' : 'Reveal'}
              </motion.button>
            </div>
            <div className="bg-neutral-100 flex-1 rounded-md relative ring ring-neutral-300 overflow-hidden">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.98,
                  filter: 'blur(10px)',
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1,
                  filter: 'blur(0px)',
                }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                  // type: 'spring',
                  // damping: 6,
                  // stiffness: 10,
                }}
                className="bg-neutral-800 inset-0 absolute w-full h-full divide-y divide-neutral-700">
                <div className="flex items-center gap-2 p-4 cursor-pointer">
                  <Command className="size-4" />
                  <p className="text-sm">Command Pallet</p>
                </div>
                <div className="flex items-center gap-2 p-4 cursor-pointer">
                  <CircleArrowOutUpLeft className="size-4" />
                  <p className="text-sm">Easy Navigation</p>
                </div>
                <div className="flex items-center gap-2 p-4 cursor-pointer">
                  <LayoutDashboard className="size-4" />
                  <p className="text-sm">Dashboard Insights</p>
                </div>
                <div className="flex items-center gap-2 p-4 cursor-pointer">
                  <FolderCode className="size-4" />
                  <p className="text-sm">Developer Friendly</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {!isOpen && (
        <motion.button
          whileTap={{
            scale: 0.95,
          }}
          transition={{
            duration: 0.1,
            ease: 'easeIn',
          }}
          onClick={() => setIsOpen(true)}
          className="bg-neutral-600 font-medium tracking-tight px-2 py-1 cursor-pointer rounded-md text-sm">
          Reveal
        </motion.button>
      )}
    </>
  );
}
