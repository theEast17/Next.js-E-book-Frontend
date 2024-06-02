import Banner from "@/app/(home)/components/Banner";
import ProductList from "./components/ProductList";
import { Suspense } from "react";
import Loader from "@/components/Loader";

export default async function Home() {

  return (
    <main>
       <Banner/>
       <Suspense fallback={<Loader/>}>
       <ProductList/>
       </Suspense>
    </main>
   
  );
}
