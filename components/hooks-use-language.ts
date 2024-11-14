'use client'

import { useState, useCallback } from 'react';
import { content } from '../content';
import { Content } from '../types';

export function useLanguage() {
  const [lang, setLang] = useState<'sv' | 'en'>('sv');

  const toggleLanguage = useCallback(() => {
    setLang((prevLang) => (prevLang === 'sv' ? 'en' : 'sv'));
  }, []);

  const t: Content = content[lang];

  return { lang, toggleLanguage, t };
}