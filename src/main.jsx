import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./Providers/AuthProvider";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
