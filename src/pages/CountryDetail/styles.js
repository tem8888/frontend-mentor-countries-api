import styled from "styled-components";
import { devices } from "../../theme/devices";

export const BackButtonContainer = styled.div`
  margin: 5rem 0;
  @media ${devices.tablet} { 
    margin: 2rem 0;
  }
`
export const BackButton = styled.button`
  font-size: 16px;
  background-color: ${({theme}) => theme.element};
  color: ${(theme) => theme.theme.text};
  padding: 0.8rem 2rem;
  border-radius: 5px;
  box-shadow: var(--shadow);
`
