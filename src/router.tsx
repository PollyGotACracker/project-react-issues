import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Error from "./pages/Error";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: ":num", element: <Detail /> },
    ],
  },
  { path: "*", element: <Error /> },
]);
