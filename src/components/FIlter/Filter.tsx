import { useDispatch, useSelector } from 'react-redux';
import { setRegion, setSearch, setSort } from 'features/filters/filtersSlice';
import { type RootState } from '@/app/store';
import { useTranslation } from 'react-i18next';
import 'components/FIlter/filter.scss';

interface FilterProps {
  regions: string[];
}

const Filter = ({ regions }: FilterProps) => {
  const dispatch = useDispatch();
  const { search, region, sort } = useSelector((state: RootState) => state.filters);

  const { t } = useTranslation();

  return (
    <div className='filter-wrapper container'>
      <input
        placeholder={t('search_placeholder')}
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />

      <select value={region} onChange={(e) => dispatch(setRegion(e.target.value))}>
        <option value=''>{t('all_regions')}</option>
        {regions.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>

      <select value={sort} onChange={(e) => dispatch(setSort(e.target.value as any))}>
        <option value=''>{t('sort_none')}</option>
        <option value='asc'>{t('sort_asc')}</option>
        <option value='desc'>{t('sort_desc')}</option>
      </select>
    </div>
  );
};

export default Filter;
