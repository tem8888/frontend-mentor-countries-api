import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BorderLink = styled(Link)`
  display: inline-block;
  padding: 5px 15px;
  margin: 5px;
  background-color: ${({ theme }) => theme.element};
  border-radius: 3px;
  box-shadow: var(--shadow);
`;
