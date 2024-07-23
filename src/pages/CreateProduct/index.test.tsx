import { fireEvent, render, waitFor } from '@testing-library/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from 'config/react-query';
import { setupSuccessCreateProductHandlers, setupSuccessVerificationProductIdHandlers } from './msw/products-handlers';
import CreateProduct from '.';

const setup = () =>
  render(
    <QueryClientProvider client={queryClient}>
        <CreateProduct />
    </QueryClientProvider>,
  );

describe('<CreateProduct />', () => {
  beforeEach(() => {
    setupSuccessCreateProductHandlers();
    setupSuccessVerificationProductIdHandlers();
  });

  it('should render the form correctly', async () => {
    const { getByLabelText } = setup();

    expect(getByLabelText(/ID/i)).toBeInTheDocument();
    expect(getByLabelText(/Name/i)).toBeInTheDocument();
    expect(getByLabelText(/Description/i)).toBeInTheDocument();
    expect(getByLabelText(/Logo URL/i)).toBeInTheDocument();
    expect(getByLabelText(/Release Date/i)).toBeInTheDocument();
    expect(getByLabelText(/Revision Date/i)).toBeInTheDocument();
  });

  it('should submit the form successfully', async () => {
    const { getByLabelText, getByRole } = setup();

    const submitButton = getByRole('button', { name: /Enviar/i });
    expect(submitButton).not.toBeEnabled();

    fireEvent.change(getByLabelText(/ID/i), { target: { value: '12345' } });
    fireEvent.change(getByLabelText(/Name/i), { target: { value: 'Product Name' } });
    fireEvent.change(getByLabelText(/Description/i), { target: { value: 'Description' } });
    fireEvent.change(getByLabelText(/Logo URL/i), { target: { value: 'http://logo.url.png' } });
    fireEvent.change(getByLabelText(/Release Date/i), { target: { value: '2024-07-23' } });

    await waitFor(() => {
      expect(getByLabelText(/Revision Date/i)).toHaveValue('2025-07-23');
      expect(submitButton).toBeEnabled();
    });
    
    fireEvent.click(getByRole('button', { name: /Enviar/i }));
  });
});
