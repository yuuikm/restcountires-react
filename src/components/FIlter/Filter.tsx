import { type FC } from 'react';
import 'components/FIlter/filter.scss';

interface FilterProps {
  onSearch: (value: string) => void;
  onRegionChange: (value: string) => void;
  onSortChange: (value: string) => void;
  regions: string[];
}

const Filter: FC<FilterProps> = ({ onSearch, onRegionChange, onSortChange, regions }) => {
  return (
    <div className='filters'>
      <input
        type='text'
        placeholder='Поиск по названию...'
        onChange={(e) => onSearch(e.target.value)}
      />
      <select onChange={(e) => onRegionChange(e.target.value)}>
        <option value=''>Все регионы</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
      <select onChange={(e) => onSortChange(e.target.value)}>
        <option value=''>Без сортировки</option>
        <option value='asc'>По возрастанию населения</option>
        <option value='desc'>По убыванию населения</option>
      </select>
    </div>
  );
};

export default Filter;
