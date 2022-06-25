import Navbar from "./components/navbar";
import Home from "./components/home/Home";
import Card from "./components/card";
import Cart from "./components/cart/cart";
import CheckOut from "./components/checkout/checkout";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore } from "redux";

import { Provider } from "react-redux";
import { contactReducer } from "./reducer/reducer";

function App() {
  const store = createStore(
    contactReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/card/:id" component={Card} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={CheckOut} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
