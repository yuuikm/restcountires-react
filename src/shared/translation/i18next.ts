import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  resources: {
    en: {
      translation: {
        search_placeholder: 'Search by name...',
        all_regions: 'All regions',
        sort_none: 'No sorting',
        sort_asc: 'Population ascending',
        sort_desc: 'Population descending',
      },
    },
    ru: {
      translation: {
        search_placeholder: 'Поиск по названию...',
        all_regions: 'Все регионы',
        sort_none: 'Без сортировки',
        sort_asc: 'По возрастанию населения',
        sort_desc: 'По убыванию населения',
      },
    },
  },
});

export default i18n;
