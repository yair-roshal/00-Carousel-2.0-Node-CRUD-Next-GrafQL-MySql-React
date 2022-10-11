import React from 'react';
import { AllWriters } from 'components';
import { Header } from 'components';
import { writers } from 'data';
import { Loading } from 'components';

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
