import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CreateDrink, ListDrinks } from '@pages/.';

export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<ListDrinks />} />
          <Route path="/createDrink" element={<CreateDrink />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
