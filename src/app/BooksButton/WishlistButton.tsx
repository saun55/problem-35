"use client"

import { useContext } from "react";
import { BookContext } from "../Context/BooksProviders";
import { BookType } from "../booksType/BooksType";


const WishlistButton = ({booksData}:{booksData:BookType}) => {

  const context = useContext(BookContext)

  if(!context){
    throw new globalThis.Error("WishlistButton must be used inside BooksProviders")
  }

  const {wishlistBooks,setWishlishBooks} = context

  const handelWishlistBooks = ()=>{

    setWishlishBooks((pre)=>[...pre, booksData])
    // setWishlishBooks([...wishlistBooks, booksData])
  }

  return (
            <button className="btn btn-primary flex-1 rounded-full" onClick={()=>{handelWishlistBooks()}}>
            📖 Wishlist
          </button>
  );
};

export default WishlistButton;