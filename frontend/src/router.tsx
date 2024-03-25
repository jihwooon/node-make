import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { IndexPage } from "./pages/index";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route index Component={IndexPage} />
  )
);
