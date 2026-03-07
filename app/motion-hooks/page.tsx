"use client";

import PorscheLogo from "@/components/logo/porscheLogo";
import {
  useScroll,
  useTransform,
  motion,
  useMotionTemplate,
} from "motion/react";
import Image from "next/image";
import { useRef } from "react";

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
};

const features: Feature[] = [
  {
    title: "The Porsche 911",
    description:
      "The Porsche 911 is a legendary sports car known for its distinctive design and exceptional performance. It has been in production since 1964 and has become an icon in the automotive world.",
    icon: <PorscheLogo className="size-16 text-neutral-300" />,
    image: "/porsche.jpg",
  },
  {
    title: "Gwagon G63 AMG",
    description:
      "The mercedes G63 AMG, also known as the G-Wagon, is a high-performance luxury SUV that combines rugged off-road capabilities with the power and sophistication of AMG engineering. It features a powerful V8 engine, advanced technology, and a luxurious interior, making it a popular choice among SUV enthusiasts.",
    icon: (
      <svg
        role="img"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="size-16 text-neutral-300">
        <path
          xmlns="http://www.w3.org/2000/svg"
          className="st0"
          d="M26.95,7.09c-1.24-2.15-3.03-3.94-5.19-5.19C19.61,0.65,17.16,0,14.67,0S9.74,0.65,7.59,1.9     C5.43,3.14,3.64,4.93,2.4,7.09c-1.24,2.15-1.9,4.6-1.9,7.09s0.65,4.93,1.9,7.09c1.24,2.15,3.03,3.94,5.19,5.19     c2.15,1.24,4.6,1.9,7.09,1.9s4.93-0.65,7.09-1.9c2.15-1.24,3.94-3.03,5.19-5.19c1.24-2.15,1.9-4.6,1.9-7.09     S28.19,9.24,26.95,7.09z M1.92,14.17c0-2.24,0.59-4.44,1.71-6.38C4.75,5.86,6.36,4.25,8.3,3.13c1.82-1.05,3.88-1.64,5.98-1.7     L12.65,13l-9.21,7.2C2.44,18.35,1.92,16.28,1.92,14.17z M21.05,25.22c-1.94,1.12-4.14,1.71-6.38,1.71s-4.44-0.59-6.38-1.71     c-1.82-1.05-3.36-2.54-4.46-4.33l10.84-4.38l10.84,4.38C24.41,22.68,22.88,24.17,21.05,25.22z M25.92,20.2L16.7,13L15.07,1.42     c2.1,0.07,4.15,0.65,5.98,1.7c1.94,1.12,3.55,2.73,4.67,4.67c1.12,1.94,1.71,4.14,1.71,6.38C27.43,16.28,26.91,18.35,25.92,20.2z     "
        />
      </svg>
    ),
    image: "/gwagon.jpg",
  },
  {
    title: "Mercedes GLE AMG",
    description:
      "The Mercedes GLE AMG is a high-performance luxury SUV that combines the ruggedness of the G-Class with the power and sophistication of AMG engineering. It features a powerful engine, advanced technology, and a luxurious interior, making it a popular choice among SUV enthusiasts.",
    icon: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        className="size-20 text-neutral-300"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg">
        <title>AMG</title>
        <path d="M23.9998 11.8942a.1216.1216 0 0 0-.127-.1271H21.607a.1216.1216 0 0 0-.1271.127v.1906a.1419.1419 0 0 0 .127.1482h1.419c.0847 0 .0847.0424.0847.1482v.0202c0 .1058 0 .1271-.0847.1271h-2.901a.1216.1216 0 0 1-.1271-.127v-.8248a.1216.1216 0 0 1 .127-.1271h3.7267a.1216.1216 0 0 0 .127-.1271v-.3177a.1216.1216 0 0 0-.127-.127h-4.616a.1216.1216 0 0 0-.127.127v2.054a.1216.1216 0 0 0 .127.127h4.616a.1216.1216 0 0 0 .127-.127v-1.1645m-7.3686.5505a.316.316 0 0 1-.1906.0847h-.5929a.316.316 0 0 1-.1907-.0847l-1.1221-.72c-.0635-.0423-.1271-.0212-.1271.0635v1.207a.1216.1216 0 0 1-.1271.1271h-.593a.1419.1419 0 0 1-.148-.127v-2.054c0-.0847.0633-.127.148-.127h.6353a.5067.5067 0 0 1 .1906.0633l1.5247.9953a.1587.1587 0 0 0 .1905 0l1.5245-.9953a.2961.2961 0 0 1 .1907-.0634h.6353a.1216.1216 0 0 1 .1269.1271v2.054a.1216.1216 0 0 1-.1269.127h-.5929a.1419.1419 0 0 1-.1484-.127v-1.2071q0-.1271-.127-.0635zm-6.6066-1.0165c-.0424 0-.0634.0203-.1058.0636l-.36.4662c-.0213.0424 0 .0635.0203.0635h2.6045c.0847 0 .0847-.0424.0847-.1058v-.318c0-.1059 0-.1482-.0847-.1482h-2.159zm-1.5245 1.7152h-.7631a.0713.0713 0 0 1-.0635-.1058L9.2825 10.92a.2145.2145 0 0 1 .1483-.0847h3.515a.1638.1638 0 0 1 .1482.1694v2.0116a.1216.1216 0 0 1-.127.1271h-.593a.1216.1216 0 0 1-.127-.127V12.72c0-.0847 0-.106-.0848-.106H9.0717a.1419.1419 0 0 0-.1271.0847v.0203l-.2329.2963a.3677.3677 0 0 1-.2329.1271zm-1.5458 0a.3217.3217 0 0 0 .2117-.127l1.5881-2.054c.0636-.0847.0203-.1482-.0424-.1482h-.3176a.2145.2145 0 0 0-.1482.0847l-1.6305 2.1174a.0716.0716 0 0 0 .0636.106h.2753zm-1.101 0a.322.322 0 0 0 .2116-.127l1.5881-2.054c.0634-.0847.0213-.1482-.0424-.1482h-.4447a.2145.2145 0 0 0-.1482.0847L5.366 13.0163a.0716.0716 0 0 0 .0636.106h.4024zm-1.8 0a.0713.0713 0 0 1-.0635-.1058L5.599 10.92a.214.214 0 0 1 .1482-.0847h.6563c.0847 0 .106.0636.0424.1484l-1.5883 2.054a.2888.2888 0 0 1-.2116.127h-.6142zm-1.5034 0a.0713.0713 0 0 1-.0634-.1058L4.0957 10.92a.2145.2145 0 0 1 .1482-.0847h.8681c.0847 0 .1058.0636.0424.1484l-1.5881 2.054a.2888.2888 0 0 1-.2118.127h-.8258zm-2.4563 0a.0713.0713 0 0 1-.0634-.1058L1.6394 10.92a.2145.2145 0 0 1 .1482-.0847h1.9268c.0847 0 .106.0636.0424.1484l-1.5881 2.054a.2888.2888 0 0 1-.2116.127H.072Z" />
      </svg>
    ),
    image: "/gle.jpg",
  },
];

const featureCard = (feature: Feature) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const transformCard = useTransform(scrollYProgress, [0, 1], [200, -300]);
  const scaleContent = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);
  const opacityImg = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const blurContent = useTransform(scrollYProgress, [0.6, 1], [0, 10]);
  return (
    <div
      key={feature.title}
      ref={ref}
      className="grid grid-cols-2 gap-20 py-40">
      <motion.div
        className="flex flex-col gap-4 justify-center"
        style={{
          scale: scaleContent,
          filter: useMotionTemplate`blur(${blurContent}px)`,
        }}>
        <div className="icon">{feature.icon}</div>
        <h2 className="text-2xl font-semibold text-white tracking-tighter">
          {feature.title}
        </h2>
        <p className="text-base text-neutral-400 tracking-tight leading-relaxed">
          {feature.description}
        </p>
      </motion.div>
      <motion.div
        style={{
          y: transformCard,
          opacity: opacityImg,
        }}
        className="relative aspect-square w-full rounded-xl overflow-hidden">
        <Image
          src={feature.image}
          alt={feature.title}
          fill
          className="object-cover object-center"
        />
      </motion.div>
    </div>
  );
};

export default function MotionHooksPage() {
  return (
    <div className="container mx-auto py-40 max-w-4xl">
      {features.map((feature) => featureCard(feature))}
    </div>
  );
}
