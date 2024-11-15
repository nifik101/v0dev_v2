import React from 'react'
import { One2TelLogo } from './One2TelLogo'
import { UniversumLogo } from './UniversumLogo'
import { PlaceholderLogo } from './PlaceholderLogo'
import { ProjectLogo } from './ProjectLogo'

export const VALID_LOGO_NAMES = [
  'one2tel',
  'universum',
  'universumcommunications',
  'project3',
  'project4'
] as const

export type ValidLogoName = typeof VALID_LOGO_NAMES[number]

export function isValidLogoName(name: string): name is ValidLogoName {
  const baseName = name.split('-')[0].toLowerCase()
  return VALID_LOGO_NAMES.includes(baseName as ValidLogoName)
}

export { BaseLogo } from './BaseLogo'
export { One2TelLogo } from './One2TelLogo'
export { UniversumLogo } from './UniversumLogo'
export { PlaceholderLogo } from './PlaceholderLogo'
export { ProjectLogo } from './ProjectLogo'
 