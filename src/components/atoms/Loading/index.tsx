import { FC } from 'react';
import { LoadingContainer, Spinner } from './styles';

const Loading: FC = () => {
  return (
    <LoadingContainer>
      <Spinner />
    </LoadingContainer>
  );
};

export default Loading;