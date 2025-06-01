import { useGetAllCountriesQuery } from 'features/countries/countriesApi';

const CountriesList = () => {
  const { data, isLoading, error } = useGetAllCountriesQuery();

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка загрузки</p>;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '1rem',
      }}
    >
      {data?.map((country) => (
        <div
          key={country.cca3}
          style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '1rem',
            textAlign: 'center',
          }}
        >
          <img
            src={country.flags.svg}
            alt={country.name.common}
            style={{ width: '100%', height: '100px', objectFit: 'contain' }}
          />
          <p>{country.name.common}</p>
        </div>
      ))}
    </div>
  );
};

export default CountriesList;
