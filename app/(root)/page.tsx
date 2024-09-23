import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";
import FooterCom from "@/components/FooterCom";


import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image src="/banner.png" alt="banner" width={2000} height={1000} className="w-screen" />
      <Collections />
      <ProductList />
      <FooterCom/>
    </>
  );
}

export const dynamic = "force-dynamic";

