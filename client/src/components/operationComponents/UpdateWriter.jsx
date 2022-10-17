import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery } from '@apollo/client'
import { GET_ONE_WRITER } from '../../query/writer'
import { UPDATE_WRITER } from '../../mutations/writer'

export const UpdateWriter = props => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm()

	const { data, loading } = useQuery(GET_ONE_WRITER, {
		variables: { id: props.match.params.id },
	})

	const [writer, setWriter] = useState([])

	useEffect(() => {
		if (!loading) {
			setWriter(data.getWriter)
		}
	}, [data])

	const [updateWriter] = useMutation(UPDATE_WRITER)

	const updateWriterItem = clientObject => {
		console.log('clientObject :>> ', clientObject)
		let { id, name, image, article } = clientObject
		updateWriter({
			variables: { input: { id, name, image, article } },
		}).then(({ data }) => {
			console.log('data===', data)
			alert('Writer successfully updated')
			// window.location.reload()
		})
	}

	return (
		<>
			{writer && (
				<div>
					<div className='titleTask'>Update Writer</div>
					<div className='formWrapper'>
						<form onSubmit={handleSubmit(updateWriterItem)}>
							<input
								style={{ display: 'none' }}
								defaultValue={props.match.params.id}
								placeholder='Id'
								{...register('id', {
									required: true,
								})}
							/>
							<label htmlFor='name'>Name</label>
							<input
								defaultValue={writer.name}
								type='text'
								placeholder='Name'
								{...register('name', {
									required: true,
									message: 'Please Enter your Name',
								})}
							/>
							{errors.name && <p style={{ color: 'red' }}>Please Enter your Name</p>}

							<br />
							<label htmlFor='image'>Photo url</label>

							<input
								type='text'
								defaultValue={writer.image}
								placeholder='Photo url'
								{...register('image', {
									required: true,
									minLength: 5,
									pattern: {
										value: /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/,
										message: 'Please Enter A Valid Link!',
									},
								})}
							/>
							{errors.image && (
								<p style={{ color: 'red' }}>Please Enter A Valid Link!</p>
							)}

							<br />
							<label htmlFor='article'>Additional text</label>

							<textarea
								defaultValue={writer.article}
								type='text'
								placeholder='Additional text'
								{...register('article')}
							/>

							<br />
							<input type='submit' />
						</form>
					</div>

					<div className='wrapperButton'>
						<Link to={'/PageTwoComponent/'} className='button'>
							<span>Back</span>
						</Link>
					</div>
				</div>
			)}
		</>
	)
}
