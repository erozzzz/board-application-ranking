import Image from 'next/image';

export const Price = () => {
  const pricingOptions = [
    {
      title: "Smili Menu connecté",
      price: "17.90€",
    },
    {
      title: "Smili Commande en ligne",
      price: "59.90€",
    },
    {
      title: "Smili Réservation en ligne",
      price: "49.90€",
    },
  ];

  return (
    <div className="relative w-1917 h-540">
      <div className="flex justify-center items-center p-9 mb-4 h-1">
        <div className="w-80 h-10 bg-[rgba(104,184,191,0.59)] text-white text-lg font-semibold border-none rounded-3xl mt-auto mb-2 flex justify-center items-center">
          <span className="text-center">Populaire</span>
        </div>
      </div>

      <div className="flex justify-center p-0">
        {pricingOptions.map((option, index) => (
          <div
            key={index}
            className="flex min-w-[330px] max-w-[330px] h-380 bg-white shadow-lg rounded-2xl m-10 flex-col justify-center items-center"
          >
            <div className="text-center p-8 pb-5 text-3xl text-[rgba(104,184,191,255)] font-semibold">
              {option.title}
            </div>
            <div className="text-center text-3xl font-semibold text-black">
              {option.price} <span className="text-gray-600 text-base">/mois</span>
            </div>
            <div className="text-center p-4 text-base font-semibold text-black">
              Tarif fixe. Engagement d&apos;un an.
            </div>
            <button className="w-40 h-10 bg-[rgba(104,184,191,255)] text-white text-lg font-semibold border-none rounded-3xl mt-auto mb-8 transition-colors ease-in-out duration-300 hover:bg-[#569ca1]">
              Essayer
            </button>
          </div>
        ))}
      </div>
      <br /><br /><br />
    </div>
  );
}
