export const VALID_LOGO_NAMES = ['one2tel', 'universum'] as const
export type ValidLogoName = typeof VALID_LOGO_NAMES[number]

export function isValidLogoName(name: string): name is ValidLogoName {
  return VALID_LOGO_NAMES.includes(name.toLowerCase() as ValidLogoName)
}

export { One2TelLogo } from './One2TelLogo'
export { UniversumLogo } from './UniversumLogo' 