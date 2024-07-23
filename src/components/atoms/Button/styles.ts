import styled, { css } from "styled-components";
import { bpColors, solidColors } from 'config/styles/colors';
import { ButtonProps } from './types';

const primaryStyles = css`
  background-color: ${bpColors.yellow[500]};
`;

const secondaryStyles = css`
  background-color: ${solidColors.background};
`;

const StyledButton = styled.button<ButtonProps>`
  padding: 8px 16px;
  ${({ $variant }) => ($variant === 'primary' ? primaryStyles : secondaryStyles)}
  color: ${bpColors.blue[500]};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default StyledButton;