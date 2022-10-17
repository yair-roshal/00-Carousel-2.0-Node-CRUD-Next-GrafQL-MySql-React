import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery } from '@apollo/client'
import { CREATE_WRITER } from '../../mutations/writer'
import { GET_ALL_WRITERS } from '../../query/writer'

export const AddWriter = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm()

	const { data, loading } = useQuery(GET_ALL_WRITERS)
	const [writers, setWriters] = useState([])

	useEffect(() => {
		if (!loading) {
			console.log('data.getAllWriters', data.getAllWriters)
			setWriters(data.getAllWriters)
		}
	}, [data])

	const [createWriter] = useMutation(CREATE_WRITER)

	const onSubmitAddWriter = data => {
		let maxId = 0
		for (let index in writers) {
			console.log('index :>> ', index)
			console.log('writers[index].id :>> ', writers[index].id)

			if (+writers[index].id > maxId) {
				maxId = +writers[index].id
			}
		}
		let id = maxId + 1

		const { name, image, article } = data

		createWriter({
			variables: { input: { id, name, image, article } },
		}).then(({ data }) => {
			console.log('data===', data)
		})
	}

	return (
		<>
			<h1 className='titleTask'>Add item</h1>

			<div className='formWrapper'>
				<form onSubmit={handleSubmit(onSubmitAddWriter)}>
					<label htmlFor='name'>Name</label>
					<input
						name='name'
						type='text'
						placeholder='Name'
						{...register('name', { required: true })}
					/>
					{errors.name && <p style={{ color: 'red' }}>Please Enter your Name</p>}

					<br />

					<label htmlFor='image'>Photo url</label>
					<input
						placeholder='Photo url'
						{...register('image', {
							required: true,
							minLength: 5,
							pattern: {
								value: /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/,
							},
						})}
					/>
					{errors.image && <p style={{ color: 'red' }}>Please Enter A Valid Link!</p>}

					<br />
					<label htmlFor='article'>Additional text</label>

					<textarea type='text' placeholder='Additional text' {...register('article')} />

					<br />
					<input type='submit' />
				</form>
			</div>

			<div className='wrapperButton'>
				<Link to={'/PageTwoComponent/'} className='button'>
					<span>Back</span>
				</Link>
			</div>
		</>
	)
}
