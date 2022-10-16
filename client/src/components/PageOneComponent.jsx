import React from 'react';
import { AllWriters } from './AllWriters';
import { Header } from './Header';
import { writers } from '../data';
import { Loading } from './Loading';

export const PageOneComponent = () => {
	if (!writers) {
		return <Loading />;
	}
	return (
		<div>
			<h1 className='titleTask'>Task №1</h1>
			<div className='wrapperCarousel'>
				<Header />
				<AllWriters writers={writers} isButtons={false} />
			</div>
		</div>
	);
};
