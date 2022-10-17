import { gql } from '@apollo/client'

export const GET_ALL_WRITERS = gql`
	query {
		getAllWriters {
			id
			name
			image
			article
		}
	}
`

export const GET_ONE_WRITER = gql`
	query getWriter($id: ID) {
		getWriter(id: $id) {
			id
			name
			image
			article
		}
	}
`
