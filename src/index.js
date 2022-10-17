import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react"
import App from "./App";



ReactDOM.render(
  <React.StrictMode>
   <Auth0Provider
      domain='suresh-website.us.auth0.com'
      clientId='JrgpZmp4L17IUZGS9KX8I0IwUnGD0TT5'
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
