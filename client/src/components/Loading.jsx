import React from 'react';
import loadingGif from '../images/loading-arrow.gif';

export const Loading = () => {
	return (
		<div className='loading'>
			<h4> Data loading...</h4>
			<img src={loadingGif} alt='' />
		</div>
	);
};
