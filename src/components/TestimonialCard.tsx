import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
  stars?: number;
}

export const TestimonialCard = ({ quote, name, location, stars = 5 }: TestimonialCardProps) => {
  return (
    <div className="flex flex-col p-6 rounded-xl bg-card shadow-[var(--shadow-soft)] border border-primary/10 hover:shadow-[var(--shadow-medium)] transition-all duration-300">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
        ))}
      </div>
      <blockquote className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 italic">
        "{quote}"
      </blockquote>
      <div className="border-t border-border pt-4">
        <p className="font-semibold text-foreground text-sm">{name}</p>
        <p className="text-xs text-muted-foreground">{location}</p>
      </div>
    </div>
  );
};
