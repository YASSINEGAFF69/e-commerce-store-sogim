import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";
import FooterCom from "@/components/FooterCom";


import Image from "next/image";
import AboutUs from "@/components/AboutUs";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <>
      <Image src="/banner.png" alt="banner" width={2000} height={1000} className="w-screen" />
      <Collections />
      <ProductList />
      <AboutUs/>
      <Contacts/>
    </>
  );
}

export const dynamic = "force-dynamic";

