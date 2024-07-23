import styled from "styled-components";
import { solidColors } from 'config/styles/colors';

export const StyledSelect = styled.select`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid ${solidColors.borderGray};
  font-size: 1rem;
  cursor: pointer;
`;

export const StyledOption = styled.option`
  padding: 8px;
`;