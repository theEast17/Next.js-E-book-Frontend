import Banner from "@/app/(home)/components/Banner";
import ProductList from "./components/ProductList";

export default async function Home() {

  console.log('Backend URL:', process.env.BACKEND_URL);
  const response = await fetch(`${process.env.BACKEND_URL}/books`)
  if(!response.ok){
    console.error(`Error: ${response.status} - ${response.statusText}`);
    throw new Error('An Error occurred while fetching the data')
  }
  const data=await response.json()
  console.log(data)


  return (
    <main>
       <Banner/>
       <ProductList book={data}/>
    </main>
   
  );
}
