import styled from "styled-components"
import { devices } from "../../../theme/devices"

export const CountryContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 5%;
margin-bottom: 2rem; 
@media ${devices.tablet} {
  flex-direction: column;
}
`
export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`
export const Flag = styled.div`
  flex: 1;
  @media ${devices.tablet} {
    margin: 3rem 0;
  }
`
export const FlagImg = styled.img`
max-width: 565px;
max-height: 405px;
object-fit: cover;
box-shadow: var(--shadow);
@media ${devices.laptop} {
  object-fit: contain;
}
`
export const Description = styled.div`
  flex: 1;
  align-self: flex-start;
  & b {
    font-weight: var(--fw-regular);
    text-transform: capitalize;
  }
`
export const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${devices.tablet} {
    flex-direction: column;
  }
`
export const BordersListWrapper = styled.div`
  margin-top: 3rem;
`
export const List = styled.ul`
  line-height: 2;
  list-style-type: none;
  padding: 0;
`