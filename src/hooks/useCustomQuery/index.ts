import { useQuery, UseQueryOptions } from '@tanstack/react-query';

const useCustomQuery = <
  IFnData,
  IError,
  IResponse,
  IQueryKey extends readonly unknown[],
>(
  params: UseQueryOptions<IFnData, IError, IResponse, IQueryKey>,
) => useQuery<IFnData, IError, IResponse, IQueryKey>(params);

export default useCustomQuery;
