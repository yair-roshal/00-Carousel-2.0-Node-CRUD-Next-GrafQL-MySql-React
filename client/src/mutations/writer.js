import {gql} from '@apollo/client'

export const CREATE_WRITER = gql`
    mutation createWriter($input: WriterInput) {
        createWriter(input: $input) {
            id, name, image,article
        }
    }
`
