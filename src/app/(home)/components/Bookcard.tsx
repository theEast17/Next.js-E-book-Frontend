import { Book } from "@/types"
import Image from "next/image"
import Link from "next/link"

const Bookcard = ({books}:{ books: Book }) => {
  return (
    <div className="border border-zinc-300 shadow-md rounded-lg px-4 py-2 flex gap-3">
      
      <div>
       <Image
       src={books.coverImage}
       alt={books.title}
       width={0}
       height={0}
       sizes="100vw"
        className="h-32 w-32 border-2 object-cover"
       />
      </div>
      <div>
        <h1 className="text-500 font-bold line-clamp-2 text-balance capitalize">{books.title}</h1>
        <h3 className="font-bold capitalize text-900">John Doe</h3>
        <Link className="inline-block mt-2 text-sm bg-transparent text-500 px-2 py-1 rounded border border-500 hover:bg-500 hover:text-100 transition-all" href={`books/${books._id}`}>Read more</Link>
      </div>

    </div>
  )
}

export default Bookcard