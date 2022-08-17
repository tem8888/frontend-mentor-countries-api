/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

function setupRender() {
  return render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
}

describe('Header', () => {
  test('should change the theme after clicking on the button', async () => {
    setupRender();
    const user = userEvent.setup();

    const darkModeButton = screen.getByRole('button', {
      name: /light mode/i,
    }) as HTMLButtonElement;
    expect(darkModeButton).toBeInTheDocument();

    await user.click(darkModeButton);

    const lightModeButton = screen.getByRole('button', {
      name: /dark mode/i,
    }) as HTMLButtonElement;
    expect(lightModeButton).toBeInTheDocument();
  });

  test('should render header link', async () => {
    setupRender();
    const linkElement = screen.getByRole('link', {
      name: /where in the world?/i,
    }) as HTMLLinkElement;
    expect(linkElement).toBeInTheDocument();
  });
});

describe('Input and Select', () => {
  test('input and select should be initially empty', () => {
    setupRender();
    const searchInputField = screen.getByLabelText(/search for a country/i, {
      selector: 'input',
    }) as HTMLInputElement;
    const selectField = screen.getByRole('combobox') as HTMLSelectElement;
    expect(searchInputField.value).toBe('');
    expect(selectField.value).toBe('');
  });

  test('should be able to type the query', async () => {
    setupRender();
    const searchInputField = screen.getByLabelText(/search for a country/i, {
      selector: 'input',
    }) as HTMLInputElement;
    await userEvent.type(searchInputField, 'korea');
    expect(searchInputField.value).toBe('korea');
  });

  test('should be able to change the region', async () => {
    setupRender();
    const selectField = screen.getByRole('combobox') as HTMLSelectElement;
    await userEvent.selectOptions(selectField, 'asia');
    expect(selectField.value).toBe('asia');
  });

  test('should display the correct number of options', () => {
    setupRender();
    expect(screen.getAllByRole('option').length).toBe(6);
  });

  test('should reset region after clicking on the button (pseudo-element)', async () => {
    // i have no idea how to test it ;(
  });
});

describe('Country List', () => {
  test('should render country list', async () => {
    setupRender();

    expect(screen.queryAllByTestId(/country-test/i).length).toBe(0);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();

    const allVisibleCountries = await screen.findAllByTestId(/country-test/i);
    expect(screen.queryByRole('progressbar')).toBeNull();
    expect(allVisibleCountries.length).toBe(12);
  });

  test('should display more countries after clicking show-more button', async () => {
    setupRender();
    const user = userEvent.setup();
    const moreButton = await screen.findByText(/show more/i);
    await user.click(moreButton);
    expect(screen.getAllByTestId(/country-test/i).length).toBe(24);
  });

  test('should display a message if country is not found', async () => {
    setupRender();
    const searchInputField = screen.getByRole('searchbox') as HTMLInputElement;
    expect(screen.queryByText(/countries are not found/i)).toBeNull();

    await userEvent.type(searchInputField, 'fake country');
    expect(
      await screen.findByText(/countries are not found/i),
    ).toBeInTheDocument();
  });
});
