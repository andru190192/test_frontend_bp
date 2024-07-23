import React from 'react';
import { type ErrorDataProps } from './interfaces';
import { ErrorGenericContainer, RetryButton, TextStyle } from './styles';

const ErrorGeneric: React.FC<ErrorDataProps> = ({ onRetry, ariaLabel }) => {
  const handleRetry = (): void => {
    onRetry();
  };

  return (
    <ErrorGenericContainer aria-label={ariaLabel}>
      <TextStyle>Ocurrió un error al cargar los datos.</TextStyle>
      <RetryButton onClick={handleRetry}>Reintentar</RetryButton>
    </ErrorGenericContainer>
  );
};

export default ErrorGeneric;
