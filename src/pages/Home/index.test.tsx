import { render, waitFor } from '@testing-library/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from 'config/react-query';
import { setupSuccessProductsHandlers } from './msw/products-handlers';
import Home from '.';

const setup = () =>
  render(
    <QueryClientProvider client={queryClient}>
        <Home />
    </QueryClientProvider>,
  );

describe('<Home />', () => {
  beforeEach(() => {
    setupSuccessProductsHandlers();
  });

  it('should render products correctly', async () => {
    const { getByText, getByRole } = setup();

    await waitFor(() => {
      const results = getByText('4 Resultados');

      const table = getByRole('table');
      const rows = table.querySelectorAll('tbody tr');
      const columns = table.querySelectorAll('thead tr th');

      const columnHeader = getByText('Nombre');
  
      expect(rows.length).toBe(4);
      expect(columns.length).toBe(7);
      expect(results).toBeInTheDocument();
      expect(columnHeader).toBeInTheDocument();
    });
  });
});
