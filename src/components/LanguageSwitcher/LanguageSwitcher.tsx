import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div>
      <select onChange={changeLanguage} value={i18n.language}>
        <option value='en'>English</option>
        <option value='ru'>Русский</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
