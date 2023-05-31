import Image from 'next/image';
import picture1 from 'public/plat1.svg';
import picture2 from 'public/plat2.png';
import checked from 'public/checked.svg';

export const Header = () => {
  return (
    <div className="items-center relative w-screen h-500 bg-gray-100">

      <div className="p-10 text-center font-semibold text-lg leading-6 text-[rgba(104,184,191,255)]">
        NOS TARIFS
      </div>


      <div className="text-center text-gray-700 text-5xl font-semibold leading-10">
        Les formules adaptées à vos <br />
        restaurants
      </div>

      <div className="flex justify-center items-center p-20 text-center text-gray-700 font-medium leading-6">
        <div className="mr-4">
          <Image src={checked} alt="Image" width={20} height={30} />
        </div>
        <div className="mr-8">
          SAV Inclus
        </div>

        <div className="mr-4">
          <Image src={checked} alt="Image" width={20} height={30} />
        </div>
        <div className="mr-8">
          Paramétrages rapides
        </div>

        <div className="mr-4">
          <Image src={checked} alt="Image" width={20} height={30} />
        </div>
        <div>
          Aide paramétrages
        </div>
      </div>

      <div className="absolute bottom-10 right-0 transform rotate-90 w-800 h-323 bg-url(6526b446d6.png)">
        <Image src={picture1} alt="Image" width={550} height={300} />
      </div>

      <div className="absolute bottom-9 left-20 w-950 h-280 bg-url(6526b446d6.png) flex items-start">
  <Image src={picture2} alt="Image" width={550} height={300} />
</div>


    </div>
  );
};
