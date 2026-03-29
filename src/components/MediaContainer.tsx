import { cn } from "@/lib/utils";

interface MediaContainerProps {
  type: 'video' | 'image' | 'gallery';
  mediaUrl?: string;
  className?: string;
}

export function MediaContainer({ type, mediaUrl, className }: MediaContainerProps) {
  if (type === 'video' && mediaUrl) {
    return (
      <div
        className={cn(
          "relative w-full aspect-video rounded-xl overflow-hidden border border-gray-200 bg-black",
          className
        )}
      >
        <video
          src={mediaUrl}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      </div>
    );
  }

  return null;
}
