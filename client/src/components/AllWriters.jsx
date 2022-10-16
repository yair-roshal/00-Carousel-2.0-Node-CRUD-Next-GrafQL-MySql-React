import React, { useState, useEffect } from 'react';
import { WriterItem } from './WriterItem';
import { userAgentMobile } from '../utils';

export const AllWriters = ({ writers, isButtons }) => {
console.log('writers', writers)

	const SLIDE = 184;
	const MARGIN = 9;
	const SLIDE_WIDTH = SLIDE + MARGIN;

	const [offset, setOffset] = useState(0);
	const [slides, setSlides] = useState(writers.length);

	useEffect(() => {
		setSlides(document.querySelectorAll('.wrapperWriter').length);
	}, [writers]);

	const handleLeftArrowClick = () => {


		setOffset(currentOffset => {
			const newOffset = currentOffset + SLIDE_WIDTH;
			const maxOffset = SLIDE_WIDTH * slides - SLIDE_WIDTH * 5;

			console.log('SLIDE_WIDTH', SLIDE_WIDTH)
			console.log('slides', slides)
 			// console.log('newOffset', newOffset)
			// console.log('maxOffset', maxOffset)

			return Math.min(newOffset, maxOffset);
		});
	};
	const handleRightArrowClick = () => {
		setOffset(currentOffset => {
			const newOffset = currentOffset - SLIDE_WIDTH;
			return Math.max(newOffset, 0);
		});
	};

	return (
		<>
			{!userAgentMobile() ? (
				<div className='twoArrows'>
					<div onClick={handleLeftArrowClick} className='arrow prev'>
						<a id='circleArrows'></a>
					</div>
				</div>
			) : null}

			<div
				className='allWriters'
				style={{
					transform: `translateX(${offset}px)`,
				}}
			>
				{writers.map((writer, index) => (
					<WriterItem key={index} writer={writer} isButtons={isButtons} />
				))}
			</div>

			{!userAgentMobile() ? (
				<div className='twoArrows'>
					<div onClick={handleRightArrowClick} className='arrow next '>
						<a id='circleArrows'></a>
					</div>
				</div>
			) : null}
		</>
	);
};
