import React from 'react';
import LottieComponent from './components/lottie.comp';

import './App.css';

function App() {
	const url1 = 'https://assets6.lottiefiles.com/packages/lf20_8uHQ7s.json';
	const width = 400;
	const height = 400;

	return (
		<main>
			<h1>Website Coming Soon</h1>
			<LottieComponent url={url1} height={height} width={width} name={''}/>
			<br />
		</main>
	);
}

export default App;
