import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from '../lotties/22830-page-construction.json';

const LottieComponent = (props) => {
	const initState = { url: '', height: 100, width: 100 };
	const [state, setLottieSate] = useState(initState);

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	useEffect(() => {
		setLottieSate({
            url: props.url,
            name: props.name,
			height: props.height,
			width: props.width,
		});
	}, [props.url]);
	return (
		<div className={'lottie-container'}>
			<h3>{state.name}</h3>
			<Lottie options={defaultOptions} height={state.height} width={state.width} />
		</div>
	);
};

export default LottieComponent;
