import { IEnvironment } from './types';

const environment: IEnvironment = {
  VITE_API_BASE_URL: `${import.meta.env.VITE_API_BASE_URL || ''}`,
  VITE_API_VERSION: `${import.meta.env.VITE_API_VERSION || 'v1'}`,
};

export default environment;
