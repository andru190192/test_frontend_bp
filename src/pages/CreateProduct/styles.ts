import styled from 'styled-components';
import { solidColors } from 'config/styles/colors';

export const Header = styled.div`
  border-bottom: 1px solid ${solidColors.black};
`;

export const Content = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Footer = styled.div`
  padding: 16px;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

export const Form = styled.form`
  background-color: ${solidColors.white};
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const HStack = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const VStack = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;
  width: calc(100% - 1rem);
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 0.875rem;
`;