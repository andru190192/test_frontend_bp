import '@testing-library/jest-dom/vitest';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import { server } from 'mocks/server';

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' });
});

afterAll(() => {
  server.close();
});

afterEach(() => {
  server.resetHandlers();
  cleanup();
});

beforeEach(() => {
  vi.mock('react-router', () => {
    return {
      ...vi.importActual('react-router'),
      useNavigate: () => vi.fn(),
    };
  });
});