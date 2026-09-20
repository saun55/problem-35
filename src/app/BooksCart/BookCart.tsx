import React from 'react';
import { BookType } from '../booksType/BooksType';
import Image from 'next/image';

interface BookCartType{
  books:BookType
}

const BookCart = ({books}:BookCartType) => {


  return (
    <div className='container mx-auto shadow-sm'>

      <div className="card bg-base-100 ">
  <figure>
    <Image
      src={books.image}
      alt="Shoes" 
      height={150} width={150}/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {books.bookName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    </div>
  );
};

export default BookCart;