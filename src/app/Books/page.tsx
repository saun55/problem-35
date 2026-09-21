
import BookCart from '../BooksCart/BookCart';
import { BookType } from '../booksType/BooksType';
import data from "../../../public/booksData.json"

const BooksPromise =async()=>{
  try{

 
//   const res = await fetch(`${data}`);
// return res.json()
  return data
 }
 
catch(error){
console.error("Error Fatching", error);
return []
}
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