import { BaseLogo } from "./BaseLogo"

interface PlaceholderLogoProps {
    className?: string;
    text: string;
}

export function PlaceholderLogo({ className, text }: PlaceholderLogoProps) {
    return (
        <BaseLogo className={className}>
            <div className="h-12 flex items-center justify-start">
                <span className="text-2xl font-bold text-primary">
                    {text}
                </span>
            </div>
        </BaseLogo>
    );
} 