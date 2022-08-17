export interface IShortCountryInfo {
  name: {
    common: string;
  };
  population: number;
  region: string;
  cca3: string;
  capital?: string[];
  flags: {
    svg: string;
    png: string;
  };
}

export interface IFullCountryInfo extends IShortCountryInfo {
  name: {
    common: string;
    nativeName: {
      [key: string]: {
        official: string;
      };
    };
  };
  subregion: string;
  tld: string[];
  currencies: {
    [key: string]: {
      name: string;
    };
  };
  borders?: string[];
  borderCountries?: {
    name: {
      common: string;
    };
    cca3: string;
  }[];
  languages: {
    [key: string]: string;
  };
}
