/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';

export interface IComposeProps {
  providers: [Component: React.ComponentType<any>, Props?: any][];
  children: ReactNode;
}

export function Compose({ providers, children }: IComposeProps) {
  return providers.reduce(
    (acc, [Component, props = {}]) => <Component {...props}>{acc}</Component>,
    children,
  );
}
