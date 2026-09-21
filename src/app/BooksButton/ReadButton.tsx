"use client"

import  { useContext } from "react";
import { BookContext } from "../Context/BooksProviders";
import { BookType } from "../booksType/BooksType";

interface ReadButtonProps{
  booksData:BookType
}

const ReadButton = ({booksData}:ReadButtonProps) => {
const context =useContext(BookContext)

if(!context){
  throw new globalThis.Error("ReadButton must be used inside BooksProviders");
}

const {readBooks, setReadBooks} = context

  const handelReadBooks = () =>{
    setReadBooks((prev)=>[...prev, booksData])

    alert(`Book Name: ${booksData.bookName}`)
    // setReadBooks([])
  }

  return (
    <button className="btn btn-primary flex-1 rounded-full" onClick={()=>{handelReadBooks()}}>

      📖 Read
      
      </button>
  );
};

export default ReadButton;
