import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Card from "./components/card/Card";
import Cart from "./components/cart/cart";
import CheckOut from "./components/checkout/checkout";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { contactReducer } from "./reducer/reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  const persistConfig = {
    key: "root",
    storage,
  };
  const persistedReducer = persistReducer(persistConfig, contactReducer);

  const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  const persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/card/:id" component={Card} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/checkout" component={CheckOut} />
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
