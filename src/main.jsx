import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import {
  // createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from "./Routes/Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className=""> 
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </div>
);