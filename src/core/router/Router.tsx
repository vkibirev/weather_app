import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BundleLoader } from '../../shared/components/BundleLoader';

const Cities = React.lazy(() => import('../../pages/cities'));
const CityWeather = React.lazy(() => import('../../pages/cityWeather'));

export const Router = (): React.JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<BundleLoader />}>
              <Cities />
            </React.Suspense>
          }
        />
        <Route
          path="cityWeather/"
          element={
            <React.Suspense fallback={<BundleLoader />}>
              <CityWeather />
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
