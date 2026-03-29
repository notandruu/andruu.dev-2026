import { useState } from 'react';
import { cn } from "@/lib/utils";

interface IconBoxProps {
  children: React.ReactNode;
  bgColor?: string;
  className?: string;
  textColor?: string;
  imageSrc?: string;
}

export function IconBox({ children, bgColor = '#000000', className, textColor = '#FFFFFF', imageSrc }: IconBoxProps) {
  const [loaded, setLoaded] = useState(false);

  if (imageSrc) {
    return (
      <div
        className={cn(
          "w-8 h-8 rounded-lg overflow-hidden flex-shrink-0",
          className
        )}
      >
        <img
          src={imageSrc}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          style={{
            filter: loaded ? 'blur(0px)' : 'blur(6px)',
            opacity: loaded ? 1 : 0,
            transition: 'filter 0.5s ease-out, opacity 0.4s ease-out',
          }}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "w-8 h-8 rounded-lg flex items-center justify-center text-sm font-semibold flex-shrink-0",
        className
      )}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </div>
  );
}
