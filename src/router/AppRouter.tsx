import { Suspense } from "react";
import { routesInLayouts } from "./router";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Loader } from "../pages/Loader/Loader";

const router = routesInLayouts.map((layout) => {
  return (
    <Route key={layout.key} element={layout.element}>
      {layout.routes.map((route) => (
        <Route {...route} />
      ))}
    </Route>
  );
});

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>{router}</Routes>
      </Suspense>
    </BrowserRouter>
  );
};
