import styled from 'styled-components'
import { devices } from '../../theme/devices'

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  margin: 30px 0 40px;
  @media ${devices.tablet} {
    flex-direction: column;
  }
`

export const ShowMoreButton = styled.button`
  display: block;
  padding: 0.8rem 2rem;
  box-shadow: var(--shadow);
  border-radius: 5px;
  color: ${(theme) => theme.theme.text};
  background-color: ${({theme}) => theme.element};
  margin: 1.5rem auto;
`