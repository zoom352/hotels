import React from "react";
import { Interface } from "readline";
import Login from "../components/login";
import Page from "../view/page";

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean
}

export enum RouteNames {
    LOGIN = '/login',
    PAGE = '/'
}

export const publicRoutes: IRoute[] = [
  {path: RouteNames.LOGIN, exact: true, component: Login}
]

export const privateRoutes: IRoute[] = [
  {path: RouteNames.PAGE, exact: true, component: Page}
]
