import { Book } from "@/types";
import Bookcard from "./Bookcard";

const ProductList = ({ book }: { book: Book[] }) => {
  return (
    <section className="max-w-5xl mx-auto relative mt-9">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-x-10">
        {book.map((book) => (
          <Bookcard key={book._id} books={book} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
