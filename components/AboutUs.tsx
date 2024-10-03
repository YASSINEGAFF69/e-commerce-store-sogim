import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className=" text-black p-4 overflow-hidden static">
      {/* Main Content Container */}
      <div className="max-w-screen-xl mx-auto">

        {/* Images Section */}
        {/* <div className="absolute -right-5 flex flex-wrap justify-center  mb-8">
          <img src="https://media.canva.com/v2/image-resize/format:PNG/height:568/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2FBkuxY%2FMAGNeEBkuxY%2F1%2Fp.png/watermark:F/width:439?csig=AAAAAAAAAAAAAAAAAAAAAPFpeQGC-ynR_wCpEsLbwrbyfkAwncgxsTzA9hxpFtRN&exp=1727964355&osig=AAAAAAAAAAAAAAAAAAAAAIPkw8KDusv6cIb5PjjwbpzgbPi5Lshf19SqSZPpYoTt&signer=media-rpc&x-canva-quality=screen" 
          
          alt="" />
        </div> */}

        {/* Text Content Section */}
        <div className="text-center">
          <span className="text-gray-500 border-b-2 border-sky-300 uppercase">un bon service , pour toujours</span>
          <h1 className="my-4 font-bold  text-heading2-bold sm:text-heading1-bold">
          avec <span className="text-sky-500">Sogim </span>tout va bien!
          </h1>
          <p className="text-gray-700">
          SOGIM est une société spécialisée dans la vente d'outils industriels via un site e-commerce dédié. Leur plateforme en ligne propose une large gamme d'équipements et d'outillage de qualité pour les professionnels de l'industrie. Le site met en avant des produits tels que des machines-outils, des instruments de mesure, des équipements de sécurité, ainsi que des pièces de rechange. Avec une interface simple et intuitive, SOGIM facilite la navigation et l'achat en ligne, tout en offrant un service client réactif et des options de livraison rapide.
          </p>
        </div>
      </div>

      {/* Brands Section */}
      {/* <div className="bg-sky-300 p-4 mt-4 relative z-10">
        <h2 className="text-xl font-semibold text-center">Nos Marques</h2>
        <div className="flex flex-wrap justify-center mt-4">
          <img 
            src="https://media.canva.com/v2/image-resize/format:PNG/height:49/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2FDmLpY%2FMAGO_GDmLpY%2F1%2Fp.png/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAALFyqyfddCeyOTBWoumhFe0M226dkcz4siKEkfWCcn-n&exp=1727820003&osig=AAAAAAAAAAAAAAAAAAAAAFW-tsXVcaCARNvXlNBGgnzX6oifjd1gkBRyTnbe0BrK&signer=media-rpc&x-canva-quality=thumbnail" 
            alt="Legrand" 
            className="h-12 mx-2" 
          />
          <img 
            src="https://media.canva.com/v2/image-resize/format:PNG/height:50/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2Fr18j4%2FMAGO_Kr18j4%2F1%2Fp.png/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAACXYHBFeBwa32_p9AccvXqzDKXrO_SpOoTs3xR8n6kVm&exp=1727818836&osig=AAAAAAAAAAAAAAAAAAAAAD5Zu57G43xOkXYTPJ_gr0kUTAQvAcX_1Ej8JdjWQVtV&signer=media-rpc&x-canva-quality=thumbnail" 
            alt="CMT Orange Tools" 
            className="h-12 mx-2" 
          />
          <img 
            src="https://media.canva.com/v2/image-resize/format:PNG/height:71/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2F7egnw%2FMAGO_L7egnw%2F1%2Fp.png/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAAEh6VxrLt0kgzIbu6dvFmI0ovL1Obkva-bFMAuBNJNhd&exp=1727820569&osig=AAAAAAAAAAAAAAAAAAAAALEqIQvcg7r6mrQUYsIROS7kBfYzT8eECSLgs_5T0UUm&signer=media-rpc&x-canva-quality=thumbnail" 
            alt="TITAN" 
            className="h-12 mx-2" 
          />
          <img 
            src="https://media.canva.com/v2/image-resize/format:PNG/height:84/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2FUtVkU%2FMAGO_GUtVkU%2F1%2Fp.png/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAABQ4uRHTwZa0oX5UdtNXT1Gs2mP3umplwjsbjnFEWTlD&exp=1727820657&osig=AAAAAAAAAAAAAAAAAAAAAHkRKDabmhV2C6mgy2uAgf76Bz6WqjLdXFdpAui-rEVJ&signer=media-rpc&x-canva-quality=thumbnail" 
            alt="DUOLEC by Auerlemann" 
            className="h-12 mx-2" 
          />
          <img 
            src="https://media.canva.com/v2/image-resize/format:PNG/height:62/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2FeTd_w%2FMAGO_MeTd_w%2F1%2Fp.png/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAADntApUl2zKctO7L7uZG0oDE6ysSDzTbP9_2I3Sb16dg&exp=1727821397&osig=AAAAAAAAAAAAAAAAAAAAACoATQleaBS-d89Iw1BvyMRn6E2VpDAsoieFYijFZgMv&signer=media-rpc&x-canva-quality=thumbnail" 
            alt="BOSCH" 
            className="h-12 mx-2" 
          />
          <img 
            src="https://media.canva.com/v2/image-resize/format:PNG/height:183/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2FETXy8%2FMAGO_EETXy8%2F1%2Fp.png/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAAIYIbRCOg3rUAOwp3azQy60n_dDh-vGXkYGXY7CN-JEB&exp=1727819264&osig=AAAAAAAAAAAAAAAAAAAAAGA1HQn8Wqmg3tpA6D4lJIXbbJss9RCuG03KJ1XYHOrO&signer=media-rpc&x-canva-quality=thumbnail" 
            alt="Sika" 
            className="h-12 mx-2" 
          />
          <img 
            src="https://media.canva.com/v2/image-resize/format:PNG/height:65/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2FVTAXs%2FMAGQj1VTAXs%2F1%2Fp.png/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAAHrr1KI-Iwb0T4oIIgi05RrgiuUaaV11ltKn-rg5MJJf&exp=1727820501&osig=AAAAAAAAAAAAAAAAAAAAAM_0L2hIWb_KyqAOYQUSkE7Pg0dh3eHlJFJV4HgCaVb3&signer=media-rpc&x-canva-quality=thumbnail" 
            alt="STANLEY Black & Decker" 
            className="h-12 mx-2" 
          />
          <img 
            src="https://media.canva.com/v2/image-resize/format:PNG/height:65/quality:100/uri:s3%3A%2F%2Fmedia-private.canva.com%2FD-8_c%2FMAGO_LD-8_c%2F1%2Fp.png/watermark:F/width:200?csig=AAAAAAAAAAAAAAAAAAAAAHJ6TbIvbG5S7GOWtpMGSGNO2zCVpuQYHX_tPrJgJ&exp=1727819902&osig=AAAAAAAAAAAAAAAAAAAAAO5ZXyngI_VikxSEZ4gujZTpsJbknDXR0x82FoOeBv1e&signer=media-rpc&x-canva-quality=thumbnail" 
            alt="Optimum" 
            className="h-12 mx-2" 
          />
        </div>
      </div> */}
    </div>
  );
};

export default AboutUs;
