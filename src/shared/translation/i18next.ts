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
        loading: 'Loading...',
        loading_error: 'Loading error',
        not_found: 'Not found',
        population: 'Population',
        borders: 'Borders',
        region: 'Region',
      },
    },
    ru: {
      translation: {
        search_placeholder: 'Поиск по названию...',
        all_regions: 'Все регионы',
        sort_none: 'Без сортировки',
        sort_asc: 'По возрастанию населения',
        sort_desc: 'По убыванию населения',
        loading: 'Загрузка...',
        loading_error: 'Ошибка загрузки',
        not_found: 'Ничего не найдено',
        population: 'Население',
        borders: 'Границы',
        region: 'Регион',
      },
    },
  },
});

export default i18n;
