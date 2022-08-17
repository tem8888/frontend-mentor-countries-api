import styled from "styled-components";

export const Select = styled.select`
  color: ${({theme}) => theme.text};
  background-color: ${({theme}) => theme.element};
  padding: 10px 10px 10px 28px;
  border: none;
  width: 200px;
  height: 55px;
  border-radius: 5px;
  border-right: 16px solid transparent;
  box-shadow: var(--shadow);
`

export const SelectWrapper = styled.div`
  position: relative;
  &::before {
    content: 'x';
    position: absolute;
    font-weight: var(--fw-regular);
    font-size: ${props => props.children.props.value ? '1.1rem' : '0'};
    top: 47%;
    width:20px;
    height: 20px;
    transform: translate(50%, -50%);
  }
`