import React from "react";
import ReactDOM from "react-dom/client";

import PaymentPage from "./common/pages/payment-page/PaymentPage";
import reportWebVitals from "./reportWebVitals";

import "./styles/globals.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <PaymentPage />
  </React.StrictMode>
);

reportWebVitals();
