import React from "react";
import { BookType } from "../booksType/BooksType";

import Link from "next/link";
import Image from "next/image";

interface BookCartType {
  books: BookType;
}

const BookCart = ({ books }: BookCartType) => {
  return (
<div className="container mx-auto">
  <div className="card overflow-hidden border border-base-300 bg-base-100 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

    {/* Book Image */}
    <figure className="relative h-72 bg-base-200 p-6">
      <img
        src={books.image}
        alt={books.bookName}
        className="h-full w-auto rounded-lg object-contain shadow-md transition-transform duration-300 hover:scale-105"
      />

      {/* Category Badge */}
      <div className="absolute left-4 top-4">
        {/* <span className="badge badge-primary">
          {books.category}
        </span> */}
      </div>

      {/* New Badge */}
      <div className="absolute right-4 top-4">
        {/* <span className="badge badge-secondary">
          NEW
        </span> */}
      </div>
    </figure>

    {/* Card Body */}
    <div className="card-body gap-3">

      {/* Book Title */}
      <h2 className="card-title text-xl font-bold">
        {books.bookName}
      </h2>

      {/* Author */}
      <p className="text-sm text-base-content/60">
        By <span className="font-semibold">{books.author}</span>
      </p>

      {/* Rating & Pages */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <span className="text-yellow-400">★</span>
          <span className="font-semibold">{books.rating}</span>
        </div>

        <span className="text-sm text-base-content/60">
          {books.totalPages} Pages
        </span>
      </div>

      {/* Review */}
      <p className="line-clamp-2 text-sm leading-6 text-base-content/70">
        {books.review}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {books.tags.slice(0, 3).map((tag, index) => (
          <span
            key={index}
            className="badge badge-outline"
          >
            #{tag}
          </span>
        ))}
      </div>

      <div className="divider my-1"></div>

      {/* Publisher & Year */}
      <div className="flex items-center justify-between text-sm text-base-content/60">
        <span>{books.publisher}</span>
        <span>{books.yearOfPublishing}</span>
      </div>

      {/* Actions */}
      <div className="card-actions mt-2">



    <Link href={`/Books/${books.bookId}`}>

            <button className="btn btn-primary w-full rounded-full">
          View Details
        </button>

  </Link>

      </div>

    </div>
  </div>
</div>
  );
};

export default BookCart;
