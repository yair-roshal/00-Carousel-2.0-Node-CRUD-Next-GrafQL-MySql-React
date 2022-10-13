import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AllWriters } from 'components';
import { Loading } from 'components';
import { Header } from 'components';
import { Link } from 'react-router-dom';

import {useMutation, useQuery} from "@apollo/client";
import {GET_ALL_WRITERS, GET_ONE_WRITER} from "./query/writer";
import {CREATE_WRITER} from "./mutations/writer";

export const PageTwoComponent = () => {

	const {data, loading, error, refetch} = useQuery(GET_ALL_WRITERS)
    const {data:oneWriter, loading: loadingOneWriter} = useQuery(GET_ONE_WRITER, {
        variables: {
            id: 1
        }
    })
    const [newWriter] = useMutation(CREATE_WRITER)
    const [writers, setWriters] = useState([])
    const [name, setWritername] = useState('')
    const [image, setImage] = useState(0)

	 
	const URL = 'http://localhost:5000/';
	const [writers, setWriters] = useState([]);
 
	useEffect(() => {
        if (!loading) {
            setWriters(data.getAllWriters)
        }
    }, [data])

	useEffect(() => {
		axios
			.get(URL)
			.then(response => {
				setWriters(response.data);
 			})
			.catch(error => {
				console.log(error);
			});
	}, []);

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
		);
	 
};
