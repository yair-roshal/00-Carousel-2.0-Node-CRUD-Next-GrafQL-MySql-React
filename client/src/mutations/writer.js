import { gql } from '@apollo/client'

export const CREATE_WRITER = gql`
	mutation createWriter($input: WriterInput) {
		createWriter(input: $input) {
			id
			name
			image
			article
		}
	}
`

export const DELETE_WRITER = gql`
	mutation deleteWriter($id: ID) {
		deleteWriter(id: $id) {
			id
			name
			image
			article
		}
	}
`

export const UPDATE_WRITER = gql`
	mutation updateWriter($input: WriterInput) {
		updateWriter(input: $input) {
			id
			name
			image
			article
		}
	}
`
