'use client';

import CardItem from '@/components/VariantDropdown/CardItem';
import {
  ArrowDownCircle,
  ArrowUpCircle,
  CircleArrowOutUpRight,
  Command,
  File,
} from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const cardItems = [
  {
    title: 'Desert Orange',
    description: 'A warm and vibrant color palette',
    icon: <Command className="size-5 text-orange-500" />,
  },
  {
    title: 'Frosted Mint',
    description: 'A cool and refreshing color palette',
    icon: <File className="size-5 text-teal-600" />,
  },
  {
    title: 'Soft Lavender',
    description: 'A calming and elegant color palette',
    icon: <ArrowDownCircle className="size-5 text-purple-400" />,
  },
  {
    title: 'Sunset Peach',
    description: 'A warm and vibrant color palette',
    icon: <CircleArrowOutUpRight className="size-5 text-amber-500" />,
  },
];

const DropDownVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  open: {
    opacity: 1,
    x: 0,
    y: 10,
  },
  closed: {
    opacity: 1,
    x: 0,
    y: 0,
  },
} as const;

const ParentVariants = {
  open: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
} as const;

const ChildVariants = {
  open: {
    opacity: 1,
    x: 0,
    y: 10,
    transition: {
      type: 'spring',
      damping: 5,
      stiffness: 200,
    },
  },
  closed: {
    opacity: 0,
    x: 0,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
  },
  exit: {
    opacity: 0,
    x: 0,
    y: 0,
  },
} as const;
export default function VariantDropDown() {
  const [isOpen, setIsopen] = useState<boolean>(false);
  return (
    <motion.div
      initial="hidden"
      exit="closed"
      animate={isOpen ? 'open' : 'closed'}
      className="max-w-sm w-full relative gap-2">
      <motion.div
        variants={DropDownVariants}
        transition={{
          type: 'spring',
          damping: 5,
          stiffness: 200,
        }}
        onClick={() => setIsopen(!isOpen)}
        className="flex gap-2 items-center justify-between bg-neutral-200 px-2 py-2 rounded-xl cursor-pointer text-neutral-800 select-none">
        <h4 className="font-medium tracking-tight text-base">Choose Theme</h4>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}>
          <ArrowUpCircle className="size-5" />
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial="closed"
            animate="open"
            exit="exit"
            variants={ParentVariants}
            className="absolute top-full left-0 right-0 mt-2 rounded-xl space-y-2">
            {cardItems.map((item, index) => (
              <motion.li
                key={index}
                variants={ChildVariants}
                className="list-none">
                <CardItem
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  className="cursor-pointer select-none"
                />
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
