// Entry point for the build script in your package.json
// import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from "react-redux";
import {store} from "./store.js";	

import App from "./app.js";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
		<Provider store={store}>
   <App/>
		</Provider>
  </React.StrictMode>
);