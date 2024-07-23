import { HttpResponse, http } from 'msw';
import { server } from '../../../mocks/server';
import environment from 'config/environment';
import { MOCK_PRODUCTS_DATA } from 'mocks/mock-data';

const successProductsHandlers = [
  http.get(`${environment.VITE_API_BASE_URL}/bp/products`, () => {
    return HttpResponse.json(MOCK_PRODUCTS_DATA,
      { status: 200 },
    );
  }),
];

export const setupSuccessProductsHandlers = (): void => {
  server.use(...successProductsHandlers);
};
