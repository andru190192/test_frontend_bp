import styled from 'styled-components';
import PrimaryButton from 'components/atoms/Button';

export const ErrorGenericContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextStyle = styled.p`
  font-family: 'Open Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #363c42;
`;

export const RetryButton = styled(PrimaryButton)`
  width: 10em;
`;
