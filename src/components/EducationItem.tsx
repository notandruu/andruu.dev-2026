import { cn } from "@/lib/utils";
import { IconBox } from './IconBox';
import type { EducationItem as EducationItemType } from '@/data/portfolio-data';

interface EducationItemProps {
  item: EducationItemType;
  className?: string;
}

export function EducationItem({ item, className }: EducationItemProps) {
  return (
    <div className={cn("py-1.5 px-0", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <IconBox bgColor={item.iconBgColor || '#DC2626'} imageSrc={item.iconType === 'image' ? item.iconContent : undefined}>
            {item.iconContent}
          </IconBox>
          <span className="text-base sm:text-xl font-medium text-black">
            {item.title}
          </span>
        </div>
        <span className="text-sm sm:text-lg font-medium text-black whitespace-nowrap">
          <span className="sm:hidden">{item.years.split(' - ')[1]}</span>
          <span className="hidden sm:inline">{item.years}</span>
        </span>
      </div>
    </div>
  );
}
