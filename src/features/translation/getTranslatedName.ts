import { type Country } from 'shared/types/Country';

const langMap: Record<string, keyof NonNullable<Country['translations']>> = {
  ru: 'rus',
};

export const getTranslatedName = (country: Country, lang: string): string => {
  if (lang === 'en') {
    return country.name.official || country.name.common;
  }

  const translationKey = langMap[lang];
  const translated = country.translations?.[translationKey]?.official;

  return translated || country.name.official || country.name.common;
};
