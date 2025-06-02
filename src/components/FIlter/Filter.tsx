import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import 'components/FIlter/filter.scss';
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';

interface FilterProps {
  onSearch: (value: string) => void;
  onRegionChange: (value: string) => void;
  onSortChange: (value: string) => void;
  regions: string[];
}

const Filter: FC<FilterProps> = ({ onSearch, onRegionChange, onSortChange, regions }) => {
  const { t } = useTranslation();

  return (
    <div className='filters'>
      <input
        type='text'
        placeholder={t('search_placeholder')}
        onChange={(e) => onSearch(e.target.value)}
      />
      <select onChange={(e) => onRegionChange(e.target.value)}>
        <option value=''>{t('all_regions')}</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
      <select onChange={(e) => onSortChange(e.target.value)}>
        <option value=''>{t('sort_none')}</option>
        <option value='asc'>{t('sort_asc')}</option>
        <option value='desc'>{t('sort_desc')}</option>
      </select>
      <LanguageSwitcher />
    </div>
  );
};

export default Filter;
