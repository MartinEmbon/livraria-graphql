import {useQuery} from "@apollo/client";
import {getBooks} from "../queries/queries"

function BookList() {
  const {loading, error, data} = useQuery(getBooks);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;
  console.log(data);
  return (
    <div>
      <ul id="book-list">      
        {data.books.map(book => (
            <li key={book.id}><b>Book name</b>:{book.name} <b>Genre:</b>{book.genre}</li>
        ))}        
      </ul>      
    </div>
  );
}

export default BookList;