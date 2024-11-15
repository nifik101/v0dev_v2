import React from 'react'
import { One2TelLogo } from './One2TelLogo'
import { UniversumLogo } from './UniversumLogo'
import { PlaceholderLogo } from './PlaceholderLogo'

interface ProjectLogoProps {
  name: string
  className?: string
}

// Helper function to extract the base logo name
function getBaseName(fullName: string): string {
  // Handle different types of hyphens and dashes
  const normalizedName = fullName.replace(/[–—-]/g, '-')
  // Split by hyphen and get the first part
  return normalizedName.split('-')[0].toLowerCase().trim()
}

export function ProjectLogo({ name, className }: ProjectLogoProps): React.ReactElement {
  const baseName = getBaseName(name)
  
  switch (baseName) {
    case 'one2tel':
      return <One2TelLogo className={className} />
    case 'universumcommunications':
    case 'universum':
      return <UniversumLogo className={className} />
    case 'jfvaskor':
    case 'jfväskor':
      return <PlaceholderLogo text="JF Väskor" className={className} />
    case 'futuremediagroup':
      return <PlaceholderLogo text="Future Media Group" className={className} />
    default:
      // For debugging
      console.log('No logo found for:', baseName, 'from:', name)
      return <PlaceholderLogo text={baseName} className={className} />
  }
} 