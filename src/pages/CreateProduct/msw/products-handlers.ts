import { HttpResponse, http } from 'msw';
import { server } from '../../../mocks/server';
import environment from 'config/environment';
import { MOCK_PRODUCTS_DATA } from 'mocks/mock-data';

const successCreateProductHandlers = [
  http.post(`${environment.VITE_API_BASE_URL}/bp/products`, () => {
    return HttpResponse.json(MOCK_PRODUCTS_DATA[0],
      { status: 200 },
    );
  })
];

const successVerificationProductIdHandlers = [
  http.get(`${environment.VITE_API_BASE_URL}/bp/products/verification`, () => {
    return HttpResponse.json(false,
      { status: 200 },
    );
  }),
];

export const setupSuccessCreateProductHandlers = (): void => {
  server.use(...successCreateProductHandlers);
};

export const setupSuccessVerificationProductIdHandlers = (): void => {
  server.use(...successVerificationProductIdHandlers);
};
