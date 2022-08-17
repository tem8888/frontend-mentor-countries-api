import styled, { createGlobalStyle } from 'styled-components';
import { devices } from './devices';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
`

export const lightTheme = {
  body: 'hsl(0, 0%, 98%)',
  text: 'hsl(200, 15%, 8%)',
  textInput: 'hsl(0, 0%, 52%)',
  element: 'hsl(0, 0%, 100%)',
  progressBarBcg: 'rgb(220, 220, 220)',
  progressBar: 'rgb(120, 120, 120)',
}

export const darkTheme = {
  body: 'hsl(207, 26%, 17%)',
  text: 'hsl(0, 0%, 98%)',
  textInput: 'hsl(0, 0%, 98%)',
  element: 'hsl(209, 23%, 22%)',
  progressBarBcg: 'rgb(66, 66, 66)',
  progressBar: 'rgb(170, 170, 170)',
}

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 0 5rem; 
  margin: 0 auto;
  @media ${devices.tablet} {
    padding: 0 1rem;
  }
`