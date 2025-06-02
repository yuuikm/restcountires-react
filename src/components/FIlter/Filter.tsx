import { useDispatch, useSelector } from 'react-redux';
import { setRegion, setSearch, setSort } from 'features/filters/filtersSlice';
import { type RootState } from '@/app/store';

interface FilterProps {
  regions: string[];
}

const Filter = ({ regions }: FilterProps) => {
  const dispatch = useDispatch();
  const { search, region, sort } = useSelector((state: RootState) => state.filters);

  return (
    <div className='filter'>
      <input
        placeholder='Поиск...'
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />

      <select value={region} onChange={(e) => dispatch(setRegion(e.target.value))}>
        <option value=''>Все регионы</option>
        {regions.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>

      <select value={sort} onChange={(e) => dispatch(setSort(e.target.value as any))}>
        <option value=''>Без сортировки</option>
        <option value='asc'>По населению</option>
        <option value='desc'>По населению</option>
      </select>
    </div>
  );
};

export default Filter;
