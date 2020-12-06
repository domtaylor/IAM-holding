import React from 'react';
import { useEffect, useState } from 'react';
import LottieComponent from './components/lottie.comp';

import './App.css';

function App() {
	const [date, setDate] = useState(null);

	const url1 = 'https://assets6.lottiefiles.com/packages/lf20_8uHQ7s.json';
	const width = 400;
	const height = 400;

	useEffect(() => {
		async function getDate() {
			const res = await fetch('/api/date');
			const newDate = await res.text();
			setDate(newDate);
		}
		getDate();
	}, []);
	return (
		<main>
			<h1>Website Coming Soon</h1>
			<LottieComponent url={url1} height={height} width={width} name={''}/>
			<br />
			<br />
		 	<h2>The current time is:</h2>
			<p>{date ? date : 'Loading date...'}</p>
		</main>
	);
}

export default App;
