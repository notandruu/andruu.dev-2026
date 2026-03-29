import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "font-serif text-2xl sm:text-[32px] font-bold tracking-tight text-black mb-2",
        className
      )}
    >
      {children}
    </h2>
  );
}
