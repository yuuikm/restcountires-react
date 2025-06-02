import { type Country } from 'shared/types/Country';

const langMap: Record<string, string> = {
  ru: 'rus',
};

export const getTranslatedName = (country: Country, lang: string): string => {
  if (lang === 'en') {
    return country.name.common;
  }

  const translationKey = langMap[lang];

  if (translationKey && country.translations?.[translationKey]?.common) {
    return country.translations[translationKey].common;
  }

  return country.name.common;
};
