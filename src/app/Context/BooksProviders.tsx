"use client"

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { BookType } from "../booksType/BooksType";

interface BooksProvidersType{

  readBooks:BookType[];
  wishlistBooks:BookType[];
  setReadBooks: Dispatch<SetStateAction<BookType[]>>
setWishlishBooks: Dispatch<SetStateAction<BookType[]>>
}

 export const BookContext = createContext<BooksProvidersType | null>(null)




 const BooksProviders = ({children}:{children:ReactNode}) => {

  const [readBooks, setReadBooks] = useState<BookType[]>([])
const [wishlistBooks, setWishlishBooks] = useState<BookType[]>([]) 

const shearData ={
                 readBooks,
                 setReadBooks,
                 wishlistBooks,
                 setWishlishBooks
}

  return (
    <BookContext.Provider value={shearData}>{children}</BookContext.Provider>
  );
};

export default BooksProviders;