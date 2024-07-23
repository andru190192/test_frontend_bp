import { useMutation, UseMutationOptions } from '@tanstack/react-query';

const useCustomMutation = <IResponse, IError, IParams, IContext>(
  params: UseMutationOptions<IResponse, IError, IParams, IContext>,
) => useMutation<IResponse, IError, IParams, IContext>(params);

export default useCustomMutation;
