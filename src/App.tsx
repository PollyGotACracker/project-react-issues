import "./App.css";
import { Outlet } from "react-router-dom";
import { PARAMS } from "./services/core";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header owner={PARAMS.OWNER} repo={PARAMS.REPO} />
      <Outlet />
    </>
  );
};

export default App;
