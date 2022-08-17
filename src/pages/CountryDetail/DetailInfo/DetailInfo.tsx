import React from "react";
import BordersList from "../BordersList/BordersList";
import {
  BordersListWrapper,
  CountryContainer,
  Description,
  Flag,
  FlagImg,
  List,
  ListWrapper,
  Title,
} from "./styles";
import { IFullCountryInfo } from "../../../types/apiResponse";

type Props = {
  country: IFullCountryInfo;
};

const DetailInfo: React.FC<Props> = ({ country }: Props) => {
  const languages = Object.values(country.languages)
    .map((lang) => lang)
    .join(", ");
  const nativeName = Object.values(country.name.nativeName).map(
    (name) => name.official
  )[0];
  const currencies = Object.values(country.currencies)
    .map((currency) => currency.name)
    .join(", ");

  return (
    <CountryContainer>
      <Flag>
        <FlagImg src={country.flags.svg} alt={country.name.common} />
      </Flag>
      <Description>
        <Title>{country.name.common}</Title>
        <ListWrapper>
          <List>
            <li>
              <b>Native name:</b> {nativeName}
            </li>
            <li>
              <b>Population:</b> {country.population.toLocaleString()}
            </li>
            <li>
              <b>Region:</b> {country.region}
            </li>
            <li>
              <b>Sub region:</b> {country.subregion}
            </li>
            <li>
              <b>Capital:</b> {country.capital ? country.capital[0] : " - "}
            </li>
          </List>
          <List>
            <li>
              <b>Top level domain:</b> {country.tld}
            </li>
            <li>
              <b>Currencies:</b> {currencies}
            </li>
            <li>
              <b>Languages:</b> {languages}
            </li>
          </List>
        </ListWrapper>

        <BordersListWrapper>
          <b>Border Countries:</b>
          {country.borderCountries ? (
            <BordersList borders={country.borderCountries} />
          ) : (
            " - "
          )}
        </BordersListWrapper>
      </Description>
    </CountryContainer>
  );
};

export default DetailInfo;
