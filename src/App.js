import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
//import Shop from './routes/shop/shop.component';
//import Home from './routes/home/home.component';
//import Navigation from './routes/navigation/navigation.component';
//import Authentication from './routes/authentication/authentication.component';
//import Checkout from './routes/checkout/checkout.component';

const Home = lazy(() => import('./routes/home/home.component'));
const Authentication = lazy(() =>
  import('./routes/authentication/authentication.component')
);
const Shop = lazy(() => import('./routes/shop/shop.component'));
const Checkout = lazy(() => import('./routes/checkout/checkout.component'));
const Navigation = lazy(() =>
  import('./routes/navigation/navigation.component')
);
const App = () => {
  return (
    <Suspense fallback={<p>loading....</p>}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="Authentication" element={<Authentication />} />
          <Route path="checkkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
