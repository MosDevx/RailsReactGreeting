// Entry point for the build script in your package.json
// import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react';
import ReactDOM from 'react-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import {Provider} from "react-redux";
import {store} from "./store.js";	

import Greeting from "./Greeting.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Greeting/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
		<Provider store={store}>
    <RouterProvider router={router} />
		</Provider>
  </React.StrictMode>
);