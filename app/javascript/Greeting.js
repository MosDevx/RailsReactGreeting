import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { useGetGreetingQuery } from './greetingSlice.js';

function Greeting() {
  const [data, setData] = useState("hey");

	const { data: greeting, error, isLoading } = useGetGreetingQuery();



		if (isLoading) return <div>Loading...</div>
		if (error) return <div>{error}</div>

		return (
			<div style={{ backgroundColor: 'lightblue', padding: '10px', fontSize: '16px' }}>
				Random Greeting: {greeting.message}
			</div>
		);
				
}

export default Greeting;