
import BookCart from '../BooksCart/BookCart';
import { BookType } from '../booksType/BooksType';

const BooksPromise =async()=>{
const res = await fetch("http://localhost:3000/booksData.json")
return res.json()
}


const BooksPage = async() => {

// const [booksData, setBooksData ] =useState([])

// useEffect(()=>{
//   fetch("./booksData.json")
// .then(res=>res.json())
// .then(data=>setBooksData(data))
// .catch(err=>console.log(err))
// },[])


// console.log(booksData);
  const booksData = await BooksPromise()

 
  return (
    <div className='grid grid-cols-3 gap-4 container mx-auto'>
     
    {
      booksData.map((books:BookType)=> <BookCart key={books.bookId} books={books}/>)
    }

    </div>
  );
};

export default BooksPage;