'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Section } from "@/components/layout/Section"
import { useLanguage } from "@/hooks/useLanguage"
import { IconType } from 'react-icons';
import { 
  FaCode, 
  FaDatabase, 
  FaMobile, 
  FaCloud 
} from 'react-icons/fa'
import Image from 'next/image';

// Define a type for different icon sources
type IconSource = {
  type: 'react-icon' | 'svg' | 'image';
  icon: IconType | string; // IconType for react-icons, string path for SVG/images
  alt?: string; // For images
}

// Separate the icon configuration
const skillIcons: IconSource[] = [
  { type: 'react-icon', icon: FaCode },
  { type: 'react-icon', icon: FaDatabase },
  { type: 'react-icon', icon: FaMobile },
  { type: 'react-icon', icon: FaCloud },
];

// Separate icon rendering component
function SkillIcon({ source, className = "w-8 h-8 mb-4 text-primary" }: { 
  source: IconSource, 
  className?: string 
}) {
  switch (source.type) {
    case 'react-icon':
      const IconComponent = source.icon as IconType;
      return <IconComponent className={className} />;
    case 'svg':
      return <img src={source.icon as string} className={className} alt={source.alt} />;
    case 'image':
      return (
        <Image 
          src={source.icon as string} 
          alt={source.alt || ''} 
          width={32} 
          height={32} 
          className={className} 
        />
      );
    default:
      return null;
  }
}

export function Skills() {
  const { t } = useLanguage();

  return (
    <Section id="skills">
      <h2 className="mb-12 text-3xl font-bold">{t.skills.title}</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {t.skills.items.map((skill, index) => (
          <Card key={index}>
            <CardContent className="flex flex-col items-center text-center p-6">
              <SkillIcon source={skillIcons[index]} />
              <h3 className="mb-2 text-lg font-semibold">{skill.title}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}