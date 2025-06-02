import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem('i18nextLng', lang);
  };

  return (
    <div>
      <select onChange={changeLanguage} value={i18n.language}>
        <option value='en'>EN</option>
        <option value='ru'>RU</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
