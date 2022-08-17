import { Link } from "react-router-dom";
import styled from 'styled-components'
import { devices } from "../../theme/devices";

export const HeaderElement = styled.header`
  box-shadow: 0 3px 3px -4px black;
  background-color: ${(theme) => theme.theme.element};
`
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
`
export const HeaderLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: var(--fw-bold);
  text-decoration: none;
  color: ${(theme) => theme.theme.text};
  @media ${devices.tablet} {
    font-size: 1.2rem;
  }
  @media ${devices.mobile} {
    font-size: 1rem;
  }
`
export const ThemeSwitcher = styled.button`
  font-weight: var(--fw-regular);
  color: ${(theme) => theme.theme.text};
  text-transform: capitalize;
`