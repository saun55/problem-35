"use client"

import { useContext, useState } from "react";
import { BookContext } from "../Context/BooksProviders";
import BookCart from "../BooksCart/BookCart";
import { BookType } from "../booksType/BooksType";

type selectT= "Rating" | "Pages" | "Year"



const ListedBooks = () => {

  const context = useContext(BookContext)

  if(!context){
     throw new globalThis.Error("ListedBooks must be used inside BooksProviders");
  }

  const {readBooks,wishlistBooks} = context
  
const [sortBy ,setSortBy]= useState<selectT>("Rating")
const sortBySelect = (books:BookType[]) =>{

  const sortByBooks = [...books];

  if(sortBy === "Rating"){
    sortByBooks.sort((a,b)=>b.rating - a.rating)
  }
  else if(sortBy === "Pages"){
    sortByBooks.sort((a,b)=>b.totalPages - a.totalPages)
  }

  else if(sortBy === "Year"){
    sortByBooks.sort((a,b)=>b.yearOfPublishing - a.yearOfPublishing)
  }
  return sortByBooks;


}

const sortReadBook = sortBySelect(readBooks)
const sortWishBooks = sortBySelect(wishlistBooks)

  return (
    <div className="container mx-auto">
      <h1 className="bg-blue-200 font-bold text-4xl text-center py-10 rounded-[5px]">
        Books
      </h1>

    {/*                select button            */}

      <div className="text-center my-6">
              
<select className="select select-success"
value={sortBy}
onChange={(a)=>setSortBy(a.target.value as selectT)}
>

  <option disabled={true}>Sort By</option>
  <option value={"Rating"}>Rating</option>
  <option value={"Pages"}>Number of pages</option>
  <option value={"Year"}>Publisher year</option>

</select>


      </div>


      {/*        Tab            */}

      <div>
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-border ">
          <input
            type="radio"
            name="my_tabs_2"
            className="tab"
            aria-label="Read Books"
            defaultChecked
          />
          <div className="tab-content border-base-300 bg-base-100 p-10">
            {sortReadBook.length > 0 ?
            (sortReadBook.map((book:BookType)=><BookCart key={book.bookId} books={book}/>)):
            <h1 className="text-2xl font-bold text-center">Not Read Books</h1>
            }
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            className="tab"
            aria-label="Wishlist Books"
            
          />
          <div className="tab-content border-base-300 bg-base-100 p-10">
         {sortWishBooks.length >0 ?
         ( sortWishBooks.map((book:BookType)=><BookCart key={book.bookId} books={book}/>)) 
         : <h1 className="text-2xl font-bold text-center">Not Wishlist Books</h1>

         }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
