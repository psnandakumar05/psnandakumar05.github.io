import { LucideIcon } from "lucide-react";

interface AudienceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const AudienceCard = ({ icon: Icon, title, description }: AudienceCardProps) => {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-white-soft via-cream/80 to-white-soft/90 border border-orange-light/30 hover:border-orange-light/50 transition-all duration-300 hover:shadow-[var(--shadow-soft)]">
      <div className="mb-4 rounded-full bg-orange-light/20 p-4">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm text-foreground/70">{description}</p>
    </div>
  );
};
