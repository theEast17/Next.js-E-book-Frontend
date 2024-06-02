import { Book } from "@/types";
import Bookcard from "./Bookcard";

const ProductList = async() => {
  const response = await fetch(`${process.env.BACKEND_URL}/books`,{
    next:{
      revalidate:3600
    }
  })
  if(!response.ok){
    console.error(`Error: ${response.status} - ${response.statusText}`);
    throw new Error('An Error occurred while fetching the data')
  }
  const data=await response.json()
  return (
    <section className="max-w-5xl mx-auto relative mt-9 mb-9">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
        {data.map((book:Book) => (
          <Bookcard key={book._id} books={book} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
