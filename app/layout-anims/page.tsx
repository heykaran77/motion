'use client';

import MercedesLogo from '@/components/logo/mercedes';
import PorscheLogo from '@/components/logo/porscheLogo';
import BmwLogo from '@/components/logo/BMW';
import FerrariLogo from '@/components/logo/Ferrari';
import Image from 'next/image';
import Toyota from '@/components/logo/Toyota';
import {
  MapPin,
  Gauge,
  Fuel,
  Zap,
  Calendar,
  Palette,
  User,
  Phone,
  Sparkles,
  Clock,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface CardInterface {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  price: number;
  location: string;
  year: number;
  mileage: number;
  color: string;
  transmission: string;
  fuelType: string;
  features: string[];
  seller: string;
  contact: string;
  createdAt: Date;
  updatedAt: Date;
}

const Cards: CardInterface[] = [
  {
    title: 'Mercedes GLE63 Coupe AMG',
    description:
      'A perfect blend of performance and luxury in a coupe SUV silhouette.',
    icon: <MercedesLogo className="size-8 mix-blend-difference" />,
    image: '/gle.jpg',
    price: 100000,
    location: 'New York',
    year: 2022,
    mileage: 10000,
    color: 'Black',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    features: ['Airbags', 'Bluetooth', 'Navigation', 'Sunroof'],
    seller: 'John Doe',
    contact: '123-456-7890',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: 'Porsche 911 Carrera S',
    description:
      'The definitive sports car experience with precision engineering.',
    icon: <PorscheLogo className="size-8" />,
    image: '/porsche.jpg',
    price: 125000,
    location: 'Los Angeles',
    year: 2021,
    mileage: 8500,
    color: 'Guards Red',
    transmission: 'PDK Automatic',
    fuelType: 'Petrol',
    features: [
      'Sport Chrono Package',
      'PASM',
      'Adaptive Sport Seats',
      'Sunroof',
    ],
    seller: 'Mike Ross',
    contact: '555-012-3456',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: 'Mercedes-Benz G63 AMG',
    description:
      'The ultimate luxury off-roader with iconic design and raw power.',
    icon: <MercedesLogo className="size-8 mix-blend-difference" />,
    image: '/gwagon.jpg',
    price: 180000,
    location: 'Miami',
    year: 2023,
    mileage: 5000,
    color: 'Matte Black',
    transmission: 'Automatic',
    fuelType: 'Petrol',
    features: [
      'V8 Biturbo',
      'Massage Seats',
      'Burmester Surround',
      'Night Edition',
    ],
    seller: 'Jane Smith',
    contact: '987-654-3210',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: 'BMW M8 Competition',
    description:
      'The pinnacle of BMW luxury and performance in a grand touring coupe.',
    icon: <BmwLogo className="size-8 mix-blend-difference" />,
    image: '/bmw.jpg',
    price: 145000,
    location: 'Chicago',
    year: 2023,
    mileage: 2500,
    color: 'Marina Bay Blue',
    transmission: 'M Steptronic',
    fuelType: 'Petrol',
    features: ['M xDrive', 'Carbon Roof', 'Bowers & Wilkins', 'Laserlight'],
    seller: 'Karan Singh',
    contact: '123-456-7890',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: 'Land Rover Defender 110',
    description:
      'An icon reimagined for the 21st century - capable of anything.',
    icon: <FerrariLogo className="size-8 mix-blend-difference" />, // Logo not available, using Ferrari as per instructions
    image: '/defender.jpg',
    price: 95000,
    location: 'Denver',
    year: 2022,
    mileage: 12000,
    color: 'Pangea Green',
    transmission: 'Automatic',
    fuelType: 'Diesel',
    features: [
      'Air Suspension',
      'ClearSight RearView',
      'Pivi Pro',
      'Expedition Rack',
    ],
    seller: 'Harvey Specter',
    contact: '555-010-0101',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: 'Mahindra Thar LX 4x4',
    description:
      'The ultimate off-road adventure vehicle that conquers every terrain.',
    icon: <Toyota className="size-8 mix-blend-difference" />, // Logo not available, using Ferrari as per instructions
    image: '/thar.jpg',
    price: 25000,
    location: 'Mumbai',
    year: 2023,
    mileage: 1500,
    color: 'Red Rage',
    transmission: 'Manual',
    fuelType: 'Diesel',
    features: [
      '4WD High/Low',
      'Removable Roof',
      'Touchscreen Infotainment',
      'Roll Cage',
    ],
    seller: 'Lord Karan',
    contact: '000-000-0000',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export default function LayoutAnim() {
  const [current, setCurrent] = useState<null | CardInterface>(null);
  const useModalClose = (callback: () => void) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClick = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as Node)) {
          callback();
        }
      };

      document.addEventListener('click', handleClick);
      return () => document.removeEventListener('click', handleClick);
    }, [callback]);

    return ref;
  };

  const ref = useModalClose(() => setCurrent(null));

  const blurRevealVariant = {
    hidden: { filter: 'blur(10px)', opacity: 0, y: 5 },
    visible: (i: number) => ({
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + i * 0.05,
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
  } as const;
  return (
    <div className="min-h-screen relative max-w-5xl mx-auto py-20 px-4 space-y-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl tracking-tighter font-bold">
          Daddy&apos;s Car Collection
        </h1>
        <p className="text-base font-medium tracking-tight text-neutral-500">
          Explore the car collection&apos;s of Lord Karan.
        </p>
      </div>

      <AnimatePresence>
        {current && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key="overlay"
              className="fixed inset-0 z-15 bg-black/20 h-full backdrop-blur-sm"
            />
            <motion.div
              layoutId={`card-${current.title}`}
              ref={ref}
              key={current.title}
              className="h-[600px] w-80 rounded-xl fixed m-auto inset-0 z-20 bg-neutral-900 cursor-pointer group ring ring-neutral-800 p-1 flex flex-col space-y-4">
              <motion.div
                layoutId={`image-${current.title}`}
                className="aspect-4/3 overflow-hidden relative rounded-lg shrink-0">
                <motion.span
                  layoutId={`logo-${current.title}`}
                  className="absolute top-4 left-4 z-10 p-2 text-center bg-black/20 backdrop-blur-sm rounded-xl">
                  {current.icon}
                </motion.span>
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  className="object-center object-cover transition-all duration-300 ease-in-out"
                />
              </motion.div>
              <div className="px-2 flex-1 overflow-y-auto no-scrollbar flex flex-col gap-4 pb-2">
                <div>
                  <motion.h2
                    layoutId={`title-${current.title}`}
                    className="text-lg tracking-tighter font-medium leading-tight">
                    {current.title}
                  </motion.h2>
                  <motion.p
                    layoutId={`desc-${current.title}`}
                    className="text-xs text-neutral-500 line-clamp-2 mt-1">
                    {current.description}
                  </motion.p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <CardPill
                    layoutId={`pill-location-${current.title}`}
                    icon={<MapPin className="size-4" />}
                    value={current.location}
                  />
                  <CardPill
                    layoutId={`pill-mileage-${current.title}`}
                    icon={<Gauge className="size-4" />}
                    value={`${(current.mileage / 1000).toFixed(0)}k km`}
                  />
                  <CardPill
                    layoutId={`pill-fuel-${current.title}`}
                    icon={<Fuel className="size-4" />}
                    value={current.fuelType}
                  />
                  <CardPill
                    layoutId={`pill-trans-${current.title}`}
                    icon={<Zap className="size-4" />}
                    value={current.transmission.split(' ')[0]}
                  />
                  <CardPill
                    layoutId={`pill-year-${current.title}`}
                    icon={<Calendar className="size-4" />}
                    value={current.year}
                  />
                  <CardPill
                    layoutId={`pill-color-${current.title}`}
                    icon={<Palette className="size-4" />}
                    value={current.color}
                  />
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h3 className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest flex items-center gap-1">
                    <Sparkles className="size-3 text-green-300" /> Features
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {current.features.map((feature, i) => (
                      <motion.span
                        key={i}
                        variants={blurRevealVariant}
                        initial="hidden"
                        animate="visible"
                        custom={i}
                        className="text-[10px] bg-neutral-900/50 ring ring-neutral-800 text-neutral-400 px-2.5 py-1 rounded-md">
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Seller & Contact */}
                <div className="space-y-2 pt-2 border-t border-neutral-800/50">
                  <div className="grid grid-cols-2 gap-2">
                    <motion.div
                      variants={blurRevealVariant}
                      initial="hidden"
                      animate="visible"
                      custom={1}
                      className="flex flex-col gap-1">
                      <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">
                        Seller
                      </span>
                      <div className="flex items-center gap-2">
                        <User className="size-3 text-green-300" />
                        <span className="text-xs font-medium text-neutral-300">
                          {current.seller}
                        </span>
                      </div>
                    </motion.div>
                    <motion.div
                      variants={blurRevealVariant}
                      initial="hidden"
                      animate="visible"
                      custom={2}
                      className="flex flex-col gap-1 items-end">
                      <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">
                        Contact
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-neutral-300">
                          {current.contact}
                        </span>
                        <Phone className="size-3 text-green-300" />
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Timestamps */}
                <motion.div
                  variants={blurRevealVariant}
                  initial="hidden"
                  animate="visible"
                  custom={3}
                  className="flex items-center justify-between text-[9px] text-neutral-600 mt-2 border-t border-neutral-800/50 pt-2">
                  <span className="flex items-center gap-1">
                    <Clock className="size-2.5 text-green-300" /> Listed{' '}
                    {current.createdAt.toLocaleDateString()}
                  </span>
                  <span>Updated {current.updatedAt.toLocaleDateString()}</span>
                </motion.div>
              </div>
              <div className="flex gap-2 mt-auto">
                <motion.div
                  layoutId={`price-${current.title}`}
                  className="flex flex-col flex-1 bg-neutral-900/50 ring rounded-lg px-4 py-1 ring-neutral-800">
                  <span className="text-xs text-neutral-500 font-medium tracking-tight">
                    Price
                  </span>
                  <span className="text-lg font-bold tracking-tighter text-white">
                    ${current.price.toLocaleString()}
                  </span>
                </motion.div>
                <motion.div
                  layoutId={`btn-${current.title}`}
                  className="flex-1">
                  <Button
                    variant="secondary"
                    className="cursor-pointer bg-green-300 hover:bg-green-200 w-full h-full rounded-lg font-semibold text-base tracking-tighter">
                    Details
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Product Cards */}
      <div className="grid grid-cols-3 gap-4">
        {Cards.map((card, idx) => {
          return (
            <motion.div
              layoutId={`card-${card.title}`}
              key={idx}
              onClick={() => setCurrent(card)}
              className="rounded-xl cursor-pointer group ring ring-neutral-800 p-1 flex flex-col space-y-4">
              <motion.div
                layoutId={`image-${card.title}`}
                className="aspect-4/3 overflow-hidden relative rounded-lg shrink-0">
                <motion.span
                  layoutId={`logo-${card.title}`}
                  className="absolute top-4 left-4 z-5 p-2 text-center bg-black/20 backdrop-blur-sm rounded-xl">
                  {card.icon}
                </motion.span>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-center object-cover group-hover:scale-105 transition-all duration-300 ease-in-out"
                />
              </motion.div>
              <div className="px-2">
                <motion.h2
                  layoutId={`title-${card.title}`}
                  className="text-lg tracking-tighter font-medium leading-tight">
                  {card.title}
                </motion.h2>
                <motion.p
                  layoutId={`desc-${card.title}`}
                  className="text-xs text-neutral-500 line-clamp-2 mt-1">
                  {card.description}
                </motion.p>
              </div>
              <div className="grid grid-cols-2 gap-2 px-2">
                <CardPill
                  layoutId={`pill-location-${card.title}`}
                  icon={<MapPin className="size-4" />}
                  value={card.location}
                />
                <CardPill
                  layoutId={`pill-mileage-${card.title}`}
                  icon={<Gauge className="size-4" />}
                  value={`${(card.mileage / 1000).toFixed(0)}k km`}
                />
                <CardPill
                  layoutId={`pill-fuel-${card.title}`}
                  icon={<Fuel className="size-4" />}
                  value={card.fuelType}
                />
                <CardPill
                  layoutId={`pill-trans-${card.title}`}
                  icon={<Zap className="size-4" />}
                  value={card.transmission.split(' ')[0]}
                />
                <CardPill
                  layoutId={`pill-year-${card.title}`}
                  icon={<Calendar className="size-4" />}
                  value={card.year}
                />
                <CardPill
                  layoutId={`pill-color-${card.title}`}
                  icon={<Palette className="size-4" />}
                  value={card.color}
                />
              </div>
              <div className="flex gap-2 mt-auto">
                <motion.div
                  layoutId={`price-${card.title}`}
                  className="flex flex-col flex-1 bg-neutral-900/50 ring rounded-lg px-4 py-1 ring-neutral-800">
                  <span className="text-xs text-neutral-500 font-medium tracking-tight">
                    Price
                  </span>
                  <span className="text-lg font-bold tracking-tighter text-white">
                    ${card.price.toLocaleString()}
                  </span>
                </motion.div>
                <motion.div layoutId={`btn-${card.title}`} className="flex-1">
                  <Button
                    variant="secondary"
                    className="cursor-pointer bg-green-300 hover:bg-green-200 w-full h-full rounded-lg font-semibold text-base tracking-tighter">
                    Details
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

const CardPill = ({
  icon,
  value,
  layoutId,
}: {
  icon: React.ReactNode;
  value: string | number;
  layoutId?: string;
}) => {
  return (
    <motion.div
      layoutId={layoutId}
      className="flex items-center justify-between bg-neutral-900/50 ring ring-neutral-800 rounded-md py-1 px-2 gap-2">
      <span className="text-neutral-500">{icon}</span>
      <h4 className="text-xs text-neutral-400">{value}</h4>
    </motion.div>
  );
};
