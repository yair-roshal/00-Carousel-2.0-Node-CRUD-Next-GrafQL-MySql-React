import React from 'react'
import { userAgentMobile } from '../utils'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import { DELETE_WRITER } from '../mutations/writer'
import { useMutation } from '@apollo/client'

export const WriterItem = ({ writer, isButtons }) => {
	const { id, name, image, article } = writer

	const [deleteWriter] = useMutation(DELETE_WRITER)

	const deleteWriterItem = () => {
		deleteWriter({
			variables: { id: id },
		}).then(({ data }) => {
			console.log('data===', data)
			alert('Writer successfully deleted')
			window.location.reload()
		})
	}

	return (
		<div className='wrapperWriter'>
			<div className='wrapperImage'>
				<img src={image} alt='writer' />
				<div className='shadowWriterName'>{name}</div>
			</div>

			<div className='wrapperInfo'>
				{!userAgentMobile() ? (
					<div className='blockArticleOne'> {article} </div>
				) : (
					<div className='blockArticleOne' style={{ 'font-weight': '400 ' }}>
						{article}
					</div>
				)}
				{!userAgentMobile() ? (
					<div className='blockArticleTwoAndThree'> {article} </div>
				) : null}
				{!userAgentMobile() ? (
					<div className='blockArticleTwoAndThree'> {article} </div>
				) : null}
			</div>

			{isButtons && (
				<div className='wrapperStaticButtons'>
					<Button onClick={deleteWriterItem} color='error' variant='contained'>
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
	)
}
