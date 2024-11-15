import { cn } from "@/lib/utils"

interface One2TelLogoProps {
  className?: string;
}

export function One2TelLogo({ className }: One2TelLogoProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="200" 
      height="60" 
      viewBox="0 0 300 100"
      className={cn("transition-all duration-300 hover:scale-105", className)}
    >
      <text 
        x="0" 
        y="50%" 
        dominantBaseline="middle" 
        textAnchor="start" 
        fontFamily="Lexend, sans-serif" 
        fontWeight="800" 
        fontSize="48"
        fill="#f97316"
        className="select-none"
      >
        ONE 2 TEL
      </text>
    </svg>
  );
} 