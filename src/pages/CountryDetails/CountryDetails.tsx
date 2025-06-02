import { type FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetCountryByCodeQuery } from 'features/countries/countriesApi';
import { useTranslation } from 'react-i18next';
import { getTranslatedName } from 'features/translation/getTranslatedName';
import 'pages/CountryDetails/country-details.scss';

const CountryDetails: FC = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const { data: countryData, isLoading, error } = useGetCountryByCodeQuery(code || '');
  const country = countryData?.[0];
  const { t, i18n } = useTranslation();

  if (isLoading) return <p>{t('loading')}</p>;
  if (error) return <p>{t('not_found')}</p>;
  if (!country || !country.name) return <p>{t('not_found')}</p>;

  const translatedName = getTranslatedName(country, i18n.language);
  const flagAlt = country.flags?.svg ? translatedName : 'flag';

  return (
    <div className='container'>
      <div className='country-details'>
        <h2 className='country-name'>{translatedName}</h2>
        {country.flags?.svg && (
          <img className='country-flag' src={country.flags.svg} alt={flagAlt} />
        )}

        <p>
          <b>{t('population')}:</b> {country.population?.toLocaleString()}
        </p>
        <p>
          <b>{t('region')}:</b> {country.region}
        </p>

        {country.borders?.length ? (
          <div className='borders'>
            <h4>{t('borders')}:</h4>
            <div className='borders-list'>
              {country.borders.map((borderCode) => (
                <button key={borderCode} onClick={() => navigate(`/country/${borderCode}`)}>
                  {borderCode}
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CountryDetails;
