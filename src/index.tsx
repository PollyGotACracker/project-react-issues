import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import reportWebVitals from "./reportWebVitals";
import { IssueService } from "./services/issue.service";
import { RouterProvider } from "react-router-dom";
import { Router } from "./router";
import ApiProvider from "./contexts/ApiContext";
import DataProvider from "./contexts/DataContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const issueService = new IssueService();

root.render(
  <React.StrictMode>
    <ApiProvider issueService={issueService}>
      <DataProvider>
        <RouterProvider router={Router} />
      </DataProvider>
    </ApiProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
