import { cn } from "@/lib/utils"

interface BaseLogoProps {
    className?: string;
    children: React.ReactNode;
}

export function BaseLogo({ className, children }: BaseLogoProps) {
    return (
        <div className={cn(
            "transition-all duration-300 hover:scale-105 hover:cursor-pointer",
            className
        )}>
            {children}
        </div>
    );
} 