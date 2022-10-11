import React from 'react';
import { userAgentMobile } from 'utils';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import axios from 'axios';

export const WriterItem = ({ writer, isButtons }) => {
	const { id, name, image, article1, article2, article3 } = writer;

	const deleteClient = () => {
		axios
			.delete('http://localhost:5000/' + id)
			.then(res => {
				if (res.status === 200) {
					alert('Client successfully deleted');
					window.location.reload();
				} else Promise.reject();
			})
			.catch(err => alert('Something went wrong'));
	};

	return (
		<div className='wrapperWriter'>
			<div className='wrapperImage'>
				<img src={image} alt='writer' />
				<div className='shadowWriterName'>{name}</div>
			</div>

			<div className='wrapperInfo'>
				{!userAgentMobile() ? (
					<div className='blockArticleOne'> {article1} </div>
				) : (
					<div className='blockArticleOne' style={{ 'font-weight': '400 ' }}>
						{article1}
					</div>
				)}
				{!userAgentMobile() ? (
					<div className='blockArticleTwoAndThree'> {article2} </div>
				) : null}
				{!userAgentMobile() ? (
					<div className='blockArticleTwoAndThree'> {article3} </div>
				) : null}
			</div>

			{isButtons && (
				<div className='wrapperStaticButtons'>
					<Button onClick={deleteClient} color='error' variant='contained'>
						Delete
					</Button>

					<Link to={'/UpdateWriter/' + id} style={{ textDecoration: 'none' }}>
						<Button
							style={{
								backgroundColor: '#2c2c2c',
							}}
							variant='contained'
						>
							Update
						</Button>
					</Link>
				</div>
			)}
		</div>
	);
};
