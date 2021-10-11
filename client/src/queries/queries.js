import { gql } from '@apollo/client';

const getBooks = gql`
  {
    books {
      name
      genre
      id
    }
  }
`;

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`;

const addBookMutation = gql`
    mutation($name:String!,$genre:String!,$authorId:ID!){
        addBook(name: $name, genre:$genre, authorId:$authorId){
            name
            id
        }
    }
`;

export {getBooks, addBookMutation, getAuthorsQuery};
