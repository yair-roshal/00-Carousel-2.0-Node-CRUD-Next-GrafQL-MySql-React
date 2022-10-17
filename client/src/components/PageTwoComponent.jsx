import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { AllWriters } from './AllWriters'
import { Loading } from './Loading'
import { Header } from './Header'
import { Link } from 'react-router-dom'

import { useMutation, useQuery } from '@apollo/client'
import { GET_ALL_WRITERS } from '../query/writer'

export const PageTwoComponent = () => {
	const { data, loading } = useQuery(GET_ALL_WRITERS)
	const [writers, setWriters] = useState([])

	useEffect(() => {
		if (!loading) {
			console.log('data.getAllWriters', data.getAllWriters)
			setWriters(data.getAllWriters)
		}
	}, [data])

	if (!writers) {
		return <Loading />
	}

	return (
		<div>
			<h1 className='titleTask'>Task №2</h1>
			<div className='wrapperCarousel'>
				<Header />
				<AllWriters writers={writers} isButtons={true} />

				<div className='wrapperButton'>
					<Link to={'/AddWriter/'} className='button'>
						<span>Add Writer </span>
					</Link>
				</div>
			</div>
		</div>
	)
}
