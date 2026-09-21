

import ReadButton from "@/app/BooksButton/ReadButton";
import WishlistButton from "@/app/BooksButton/WishlistButton";
import { BookType } from "@/app/booksType/BooksType";




interface BooksDetailsCartType{
  params:Promise<{BooksId:string}>
}


const BooksDataCart =async():Promise<BookType[]>=>{
try{



  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
  const data =await res.json()
  return data}
  catch(error){
    console.error("Error fetching",error);
    
    return[]
  }
 

}




const BooksDetailsCart = async({params}:BooksDetailsCartType) => {

const {BooksId}=await params;


const BooksData =await BooksDataCart()

const booksData = BooksData.find(book=> book.bookId === Number(BooksId))

if(!booksData){
  return "Book not Fount"
}

  return (

<div className="container mx-auto my-10 px-4">
  <div className="overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-xl">

    <div className="grid grid-cols-1 lg:grid-cols-3">

      {/* Book Image */}
      <div className="flex min-h-[450px] items-center justify-center bg-base-200 p-8">
        <img
          src={booksData?.image}
          alt={booksData?.bookName}
          className="max-h-[400px] w-auto rounded-xl object-contain shadow-2xl"
        />
      </div>

      {/* Book Details */}
      <div className="p-6 sm:p-8 lg:col-span-2">

        {/* Category */}
        <div className="mb-4">
          <span className="badge badge-primary badge-lg">
            {booksData?.category}
          </span>
        </div>

        {/* Book Name */}
        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
          {booksData.bookName}
        </h1>

        {/* Author */}
        <p className="mt-3 text-lg text-base-content/60">
          By{" "}
          <span className="font-semibold text-base-content">
            {booksData.author}
          </span>
        </p>

        {/* Rating */}
        <div className="mt-5 flex flex-wrap items-center gap-4">

          <div className="flex items-center gap-2 rounded-full bg-warning/10 px-4 py-2">
            <span className="text-xl text-warning">★</span>
            <span className="font-bold">
              {booksData.rating}
            </span>
            <span className="text-sm text-base-content/60">
              / 5
            </span>
          </div>

          <div className="badge badge-outline badge-lg">
            {booksData.totalPages} Pages
          </div>

        </div>

        <div className="divider"></div>

        {/* Review */}
        <div>
          <h2 className="mb-2 text-xl font-bold">
            About the Book
          </h2>

          <p className="leading-7 text-base-content/70">
            {booksData.review}
          </p>
        </div>

        {/* Book Information */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">

          <div className="rounded-xl bg-base-200 p-4">
            <p className="text-sm text-base-content/50">
              Publisher
            </p>
            <p className="mt-1 font-semibold">
              {booksData.publisher}
            </p>
          </div>

          <div className="rounded-xl bg-base-200 p-4">
            <p className="text-sm text-base-content/50">
              Published Year
            </p>
            <p className="mt-1 font-semibold">
              {booksData.yearOfPublishing}
            </p>
          </div>

          <div className="rounded-xl bg-base-200 p-4">
            <p className="text-sm text-base-content/50">
              Total Pages
            </p>
            <p className="mt-1 font-semibold">
              {booksData.totalPages}
            </p>
          </div>

          <div className="rounded-xl bg-base-200 p-4">
            <p className="text-sm text-base-content/50">
              Category
            </p>
            <p className="mt-1 font-semibold">
              {booksData.category}
            </p>
          </div>

        </div>

        {/* Tags */}
        <div className="mt-6">
          <h2 className="mb-3 font-bold">
            Tags
          </h2>

          <div className="flex flex-wrap gap-2">
            {booksData.tags.map(
              (tag: string, index: number) => (
                <span
                  key={index}
                  className="badge badge-outline badge-primary"
                >
                  #{tag}
                </span>
              )
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">

       <ReadButton booksData= {booksData}/>

         <WishlistButton booksData ={booksData}/>

        </div>

      </div>
    </div>
  </div>
</div>

  );
};

export default BooksDetailsCart;