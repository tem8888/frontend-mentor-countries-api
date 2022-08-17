import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CountryPage from './pages/CountryDetail/CountryDetail';
import Home from './pages/Home/Home';
import NoMatch from './pages/404/NoMatch';
import { useTheme } from './hooks/useTheme';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from './theme/theme';
import Header from './components/Header/Header';
import { IShortCountryInfo } from './types/apiResponse';

function App() {
  const [theme, handleChangeTheme] = useTheme('light');
  const [countries, setCountries] = useState<IShortCountryInfo[]>([]);

  const saveCountries = (data: IShortCountryInfo[]) => {
    setCountries(data);
  };
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header theme={theme} handleChangeTheme={handleChangeTheme} />
      <main>
        <Routes>
          <Route
            index
            element={
              <Home countries={countries} saveCountries={saveCountries} />
            }
          />
          <Route path="country">
            <Route path=":name" element={<CountryPage />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;
