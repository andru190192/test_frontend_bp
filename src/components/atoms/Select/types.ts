export interface Option {
  value: number;
  label: string;
}

export interface SelectProps {
  id: string;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
}