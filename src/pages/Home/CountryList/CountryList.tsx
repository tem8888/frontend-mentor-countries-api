import React from 'react';
import { IShortCountryInfo } from '../../../types/apiResponse';
import ProgressBar from '../../../components/ProgressBar/ProgressBar';
import { CountryListWrapper } from './styles';

type Props = {
  error: string;
  loading: boolean;
  countries: IShortCountryInfo[];
  renderItem: (item: IShortCountryInfo, index: number) => React.ReactNode;
};

const CountryList = ({ error, loading, countries, renderItem }: Props) => {
  if (loading) {
    return <ProgressBar />;
  }
  if (!countries.length) {
    return <div>Countries are not found.</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return <CountryListWrapper>{countries.map(renderItem)}</CountryListWrapper>;
};

export default CountryList;
