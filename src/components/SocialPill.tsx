import { cn } from "@/lib/utils";

interface SocialPillProps {
  icon: React.ReactNode;
  label?: string;
  href: string;
  className?: string;
}

export function SocialPill({ icon, label, href, className }: SocialPillProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 px-4 h-9 rounded-lg",
        "bg-white border border-gray-200",
        "shadow-[0_1px_3px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)]",
        "hover:shadow-[0_2px_6px_rgba(0,0,0,0.1),0_1px_3px_rgba(0,0,0,0.06)]",
        "hover:scale-[1.03]",
        "transition-all duration-200 ease-out",
        "text-sm text-gray-900",
        className
      )}
    >
      {icon}
      {label && <span>{label}</span>}
    </a>
  );
}
