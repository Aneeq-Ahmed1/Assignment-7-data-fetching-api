import React from "react";
interface Ibook {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

const Serverside = async () => {
  const response = await fetch("https://simple-books-api.glitch.me/books/");
  const books: Ibook[] = await response.json();

  return (
    <div className="bg-gray-600">
      <h1 className="text-center pt-5 text-2xl md:text-3xl lg:text-4xl font-semibold">Server Side Data Fetching</h1>
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 p-10  text-black ">
       
      {books.map((book: Ibook) => (
        <div
          key={book.id}
          className=" bg-white flex flex-col justify-center items-center text-center border border-white rounded-md hover:scale-95 h-[35vh]"
        >
          <h1 className="font-semibold">{book.name}</h1>
          <p>Type: {book.type}</p>
          
            {book.available && <p className="text-blue-700 font-medium  ">Available</p>}
            {!book.available && <p className="text-red-700 font-medium ">Not Available</p>}
            {book.available && <button className="p-2 bg-blue-700 rounded-md mt-5 ">Contact Us</button>}
            {!book.available && <button className="p-2 bg-red-700 rounded-md mt-5 ">Out Of Stock</button>}
           
         
        </div>
      ))}
    </div>
    </div>
  );
};

export default Serverside;
