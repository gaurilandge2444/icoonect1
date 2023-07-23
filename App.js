import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/products/:productId">
          <ProductDetails />
        </Route>
        <Route path="/">
          <ProductList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;










