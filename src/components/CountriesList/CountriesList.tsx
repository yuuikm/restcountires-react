import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { useGetAllCountriesQuery } from 'features/countries/countriesApi';
import 'components/CountriesList/countries-list.scss';

const CountriesList: FC = () => {
  const { data, isLoading, error } = useGetAllCountriesQuery();

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка загрузки</p>;

  return (
    <div className='countries-wrapper container'>
      {data?.map((country) => (
        <Link to='#'>
          <div key={country.cca3} className='country-card'>
            <img src={country.flags.svg} alt={country.name.common} className='country-flag' />
            <p>{country.name.common}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CountriesList;
