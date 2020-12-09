import React from 'react';
import LottieComponent from './components/lottie.comp';
/* import MailchimpSubscribe from 'react-mailchimp-subscribe';
 */
import Logo from './components/logo';

import './App.css';

function App() {
	const url1 = 'https://assets6.lottiefiles.com/packages/lf20_8uHQ7s.json';
	const width = 300;
	const height = 300;
  /*   const URL = process.env.REACT_APP_MAILCHIMP_URL || 'https://shaka-surf.us17.list-manage.com/subscribe/post?u=73a23478eb58d3e486ff20cd0&amp;id=63d3116812'
 */	return (
		<main>
			<Logo />
			<h1>Website Coming Soon</h1>
			{/* <MailchimpSubscribe url={URL} /> */}
			<LottieComponent url={url1} height={height} width={width} name={''}/>
			<br />
		</main>
	);
}

export default App;
