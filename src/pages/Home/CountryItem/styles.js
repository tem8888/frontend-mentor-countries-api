import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 264px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: var(--shadow);
  overflow: hidden;
`

export const CardFlag = styled.div`
  height: 160px;
  z-index: 2;
`
export const CardFlagImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.05);
`

export const CardDescription = styled.div`
  height: 178px;
  font-size: 14px;
  font-weight: var(--fw-light);
  padding: 0 25px;
  line-height: 1.6;
  background-color: ${({theme}) => theme.element};
  & b {
    font-weight: var(--fw-regular);
  }
`

export const CardTitle = styled.h3`
  font-size: 1.15rem;
  font-weight: var(--fw-bold);
  padding: 20px 0;
`