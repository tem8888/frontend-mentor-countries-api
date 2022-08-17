import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  position: relative;
  flex: 1;
`

export const Input = styled.input`
  color: ${({theme}) => theme.text};
  background-color: ${({theme}) => theme.element};
  padding: 10px 10px 10px 65px;
  border: none;
  max-width: 480px;
  width: 100%;
  height: 55px;
  border-radius: 5px;
  box-shadow: var(--shadow);
  &::placeholder {
    color: ${({theme}) => theme.text}
  }
`

export const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translate(50%, -50%);
`