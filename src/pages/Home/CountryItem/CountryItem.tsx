import React from 'react';
import { Link } from 'react-router-dom';
import { IShortCountryInfo } from '../../../types/apiResponse';
import {
  Card,
  CardFlag,
  CardFlagImg,
  CardDescription,
  CardTitle,
} from './styles';

type Props = {
  country: IShortCountryInfo;
  index: number;
};

const CountryItem: React.FC<Props> = ({ country, index }: Props) => {
  return (
    <Card>
      <Link
        to={`/country/${country.cca3.toLowerCase()}`}
        data-testid={`country-test-${index}`}
      >
        <CardFlag>
          <CardFlagImg src={country.flags.svg} alt={country.name.common} />
        </CardFlag>
        <CardDescription>
          <CardTitle>{country.name.common}</CardTitle>
          <p>
            <b>Population:</b> {country.population.toLocaleString()}
          </p>
          <p>
            <b>Region:</b> {country.region}
          </p>
          <p>
            <b>Capital:</b> {country.capital ? country.capital[0] : ' - '}
          </p>
        </CardDescription>
      </Link>
    </Card>
  );
};

export default CountryItem;
