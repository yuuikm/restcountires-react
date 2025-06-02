import { useGetAllCountriesQuery } from 'features/countries/countriesApi';
import { useSelector } from 'react-redux';
import { type RootState } from '@/app/store';
import { useTranslation } from 'react-i18next';
import CountryCard from './CountryCard/CountryCard';
import Filter from 'components/FIlter/Filter';
import 'components/CountriesList/countries-list.scss';

const CountriesList = () => {
  const { data, isLoading, error } = useGetAllCountriesQuery();
  const { search, region, sort } = useSelector((state: RootState) => state.filters);
  const regions = Array.from(new Set((data ?? []).map((c) => c.region))).filter(Boolean);
  const { t } = useTranslation();

  if (isLoading) return <p>{t('loading')}</p>;
  if (error) return <p>{t('loading_error')}</p>;

  let filtered = data || [];

  if (search) {
    filtered = filtered.filter((country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (region) {
    filtered = filtered.filter((country) => country.region === region);
  }

  if (sort === 'asc') {
    filtered = [...filtered].sort((a, b) => a.population - b.population);
  } else if (sort === 'desc') {
    filtered = [...filtered].sort((a, b) => b.population - a.population);
  }

  return (
    <>
      <Filter regions={regions} />

      <div className='countries-wrapper container'>
        {filtered.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </>
  );
};

export default CountriesList;
