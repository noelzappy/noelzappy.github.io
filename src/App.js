import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Routes from "./router/Routes";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="tokyo_tm_all_wrap">
      <Routes />
      <ToastContainer />
    </div>
  );
};

export default App;
