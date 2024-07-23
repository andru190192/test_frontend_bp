import { type SelectProps } from './types';
import { StyledSelect, StyledOption } from './styles';

const Select = ({ id, value, onChange, options }: SelectProps) => {
  return (
    <StyledSelect id={id} value={value} onChange={onChange}>
       <option value={0} disabled>...</option>
      {options.map((option) => (
        <StyledOption key={option.value} value={option.value}>
          {option.label}
        </StyledOption>
      ))}
    </StyledSelect>
  );
};

export default Select;