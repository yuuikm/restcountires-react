import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { getTranslatedName } from 'features/translation/getTranslatedName';
import { type Country } from 'shared/types/Country';
import 'components/CountriesList/CountryCard/country-card.scss';

interface CountryCardProps {
  country: Country;
}

const CountryCard: FC<CountryCardProps> = ({ country }) => {
  const { i18n } = useTranslation();

  const translatedName = getTranslatedName(country, i18n.language);

  return (
    <div className='country-card'>
      <img src={country.flags.png} alt={translatedName} className='country-flag' />
      <h3>{translatedName}</h3>
    </div>
  );
};

export default CountryCard;
