import React, { useState, useEffect } from 'react';
import { FilterContainer, ShowMoreButton } from './styles';
import { Container } from '../../theme/theme';
import CountryList from './CountryList/CountryList';
import CountryItem from './CountryItem/CountryItem';
import InputFilter from '../../components/InputFilter/InputFilter';
import SelectFilter from '../../components/SelectFilter/SelectFilter';
import { IShortCountryInfo } from '../../types/apiResponse';

type Props = {
  countries: IShortCountryInfo[];
  saveCountries: (data: any) => void;
};

const Home = ({ countries, saveCountries }: Props) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [filterValue, setFilterValue] = useState<string>('');
  const [itemsToShow, setItemsToShow] = useState<number>(12);
  const [loading, setLoading] = useState<boolean>(
    countries.length ? false : true,
  );
  const [error, setError] = useState('');

  useEffect(() => {
    if (!countries.length) fetchCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countries]);

  const fetchCountries = async () => {
    try {
      const response = await fetch(
        'https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,cca3',
      );
      const data = await response.json();
      saveCountries(
        data.sort(
          (a: IShortCountryInfo, b: IShortCountryInfo) =>
            b.population - a.population,
        ),
      );
      setLoading(false);
    } catch (error) {
      setError('Fetching is failed');
      setLoading(false);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleFilter = (targetValue: string) => {
    setFilterValue(targetValue);
  };

  // useMemo поможет избежать лишних вычислений
  // в данном случае, при нажатии на кнопку Show More
  const filteredData = React.useMemo(
    () =>
      countries.filter((country) => {
        if (
          searchValue !== '' &&
          !country.name.common
            .toLocaleLowerCase()
            .includes(searchValue.toLowerCase())
        )
          return false;
        if (
          filterValue !== '' &&
          !country.region
            .toLocaleLowerCase()
            .includes(filterValue.toLowerCase())
        )
          return false;

        return true;
      }),
    [searchValue, filterValue, countries],
  );

  const onClickShowMore = () => {
    setItemsToShow((itemsToShow) => itemsToShow * 2);
  };

  return (
    <Container>
      <FilterContainer>
        <InputFilter value={searchValue} handleSearch={handleSearch} />
        <SelectFilter value={filterValue} handleFilter={handleFilter} />
      </FilterContainer>
      <CountryList
        error={error}
        loading={loading}
        countries={filteredData.slice(0, itemsToShow)}
        renderItem={(item, index) => (
          <CountryItem key={item.name.common} country={item} index={index} />
        )}
      />
      {itemsToShow < filteredData.length && (
        <ShowMoreButton onClick={onClickShowMore}>Show More</ShowMoreButton>
      )}
    </Container>
  );
};

export default Home;
