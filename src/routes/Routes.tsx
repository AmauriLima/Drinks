import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CreateDrink, Home } from '@pages/.';

export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/createDrink" element={<CreateDrink />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
