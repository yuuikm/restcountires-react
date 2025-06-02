import { type FC } from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';
import { LINKS } from 'shared/links/links';
import 'components/Header/header.scss';

const Header: FC = () => {
  return (
    <div className='header container'>
      <h2>
        <Link to={LINKS.home}>Restcountries API</Link>
      </h2>
      <LanguageSwitcher />
    </div>
  );
};

export default Header;
