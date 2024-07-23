import { FC } from 'react';
import { ButtonProps } from './types';
import StyledButton from './styles';

const Button: FC<ButtonProps> = ({ $variant='primary', children, ...props }) => {
  return <StyledButton $variant={$variant} {...props}>{children}</StyledButton>;
};

export default Button;