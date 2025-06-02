import { useState } from 'react';
import { useGetAllCountriesQuery } from 'features/countries/countriesApi';
import Filter from 'components/FIlter/Filter';
import 'components/CountriesList/countries-list.scss';

const CountriesList = () => {
  const { data, isLoading, error } = useGetAllCountriesQuery();
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');
  const [sort, setSort] = useState('');

  const regions = Array.from(new Set((data ?? []).map((c) => c.region))).filter(Boolean);

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка загрузки</p>;

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
    filtered = filtered.slice().sort((a, b) => a.population - b.population);
  } else if (sort === 'desc') {
    filtered = filtered.slice().sort((a, b) => b.population - a.population);
  }

  return (
    <>
      <Filter
        onSearch={setSearch}
        onRegionChange={setRegion}
        onSortChange={setSort}
        regions={regions}
      />

      <div className='countries-wrapper container'>
        {filtered.map((country) => (
          <div key={country.cca3} className='country-card'>
            <img src={country.flags.svg} alt={country.name.common} className='country-flag' />
            <p>{country.name.common}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CountriesList;
