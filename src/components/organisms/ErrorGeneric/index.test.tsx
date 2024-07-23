import { render, fireEvent } from '@testing-library/react';
import ErrorGeneric from '.';

describe('ErrorGeneric Component', () => {
  it('renders error message and retry button', () => {
    const { getByText } = render(<ErrorGeneric onRetry={() => {}} />);
    expect(getByText('Ocurrió un error al cargar los datos.')).toBeInTheDocument();
    expect(getByText('Reintentar')).toBeInTheDocument();
  });

  it('calls onRetry function when retry button is clicked', () => {
    const mockOnRetry = vi.fn();
    const { getByText } = render(<ErrorGeneric onRetry={mockOnRetry} />);
    fireEvent.click(getByText('Reintentar'));
    expect(mockOnRetry).toHaveBeenCalled();
  });
});
