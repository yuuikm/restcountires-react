import { type FC } from 'react';
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';
import 'components/Header/header.scss';

const Header: FC = () => {
  return (
    <div className='header container'>
      <h2>Restcountries API</h2>
      <LanguageSwitcher />
    </div>
  );
};

export default Header;
