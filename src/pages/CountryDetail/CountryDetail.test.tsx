/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import CountryDetail from './CountryDetail';

function setupRender() {
  return render(
    <MemoryRouter>
      <CountryDetail />
    </MemoryRouter>,
  );
}

describe('Country Detail', () => {
  test('should render border countries', () => {
    // setupRender();
  });
});
