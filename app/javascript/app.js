import React from 'react';
import ReactDOM from 'react-dom';
import {

	Routes,
	Route
} from "react-router-dom";
import "./index.css";

import Greeting from "./Greeting.js";



const App = () => {	
	return (
<>
		<Routes>
			<Route path="/" element={<Greeting/>} />
		</Routes>
</>
	);
}

export default App;
