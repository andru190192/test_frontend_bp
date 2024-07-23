enum EPublicRoutes {
  INDEX = '/',
  PRODUCT = '/product',
}

enum EPrivateRoutes {}

enum EPublicChildren {
  AUTH_LOGIN = '',
}

export type TRoutes =
  | EPublicRoutes
  | EPrivateRoutes
  | EPublicChildren;

export const routesPaths = {
  public: EPublicRoutes,
  private: EPrivateRoutes,
  publicChildren: EPublicChildren,
};
