import { cn } from '@/lib/utils';

interface CardItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export default function CardItem({
  title,
  description,
  icon,
  className,
}: CardItemProps) {
  return (
    <div
      className={cn(
        'px-4 py-2 bg-neutral-200 text-neutral-900 rounded-xl',
        className,
      )}>
      <div className="flex items-center gap-2">
        {icon}
        <h4 className="font-medium tracking-tight text-base">{title}</h4>
      </div>
      <p className="text-xs text-neutral-500">{description}</p>
    </div>
  );
}
