import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useMutation, useQuery } from '@apollo/client'
import { CREATE_WRITER } from '../../mutations/writer'

export const AddWriter = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm()

	// const [newWriter] = useMutation(CREATE_WRITER)
	const [createWriter] = useMutation(CREATE_WRITER, {
		// onCompleted: () => history.push('/'),

		variables: { id: 33, name: '222', image: '2222', article: '222' },
	})

	// const [mutateFunction, { data, loading, error }] = useMutation(INCREMENT_COUNTER);

	// const onSubmit = data => {

	// 	axios
	// 		.post('http://localhost:5000/', data)
	// 		.then(res => {
	// 			if (res.status === 200) {
	// 				alert('Client successfully added');
	// 			} else Promise.reject();
	// 		})
	// 		.catch(err => alert('Something went wrong'));
	// };

	const onSubmitAddWriter = data => {
		let id = 777
		console.log('data----', data)
		const { name, image, article } = data
		console.log('name---', name)

		createWriter({
			variables: { input: { id, name, image, article } },
			// variables: { input: { id: 723, name: '222', image: '2222', article: '222' } },
		}).then(({ data }) => {
			console.log('data===', data)
			// setWritername('')
			// setAge(0)
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
