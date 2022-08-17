import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

let cache = new Map();

function useFetch<T = unknown>(URL: string): [T, boolean, string] {
  let location = useLocation();
  let cacheKey = location.key + URL;
  let cached = cache.get(cacheKey);

  const [data, setData] = useState<T>(cached || []);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const onLoad = async () => {
      try {
        const response = await fetch(URL);
        const [country] = await response.json();
        const codes = country.borders ? country.borders.join(',') : '';

        if (codes) {
          const response2 = await fetch(
            `https://restcountries.com/v3.1/alpha?fields=name,cca3;codes=${codes}`,
          );
          country['borderCountries'] = await response2.json();
        }

        cache.set(cacheKey, country);
        setData(country);
        setLoading(false);
      } catch (error) {
        setError('Fetching data is failed');
        setLoading(false);
      }
    };
    if (loading) {
      onLoad();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, cacheKey]);

  useEffect(() => {
    if (!cached) {
      setLoading(true);
    } else {
      setData(cached);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [URL]);

  return [data, loading, error];
}

export default useFetch;
