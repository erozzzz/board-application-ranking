import Image from 'next/image';
import icon1 from 'public/icon1.svg';
import icon2 from 'public/icon2.svg';
import icon3 from 'public/icon3.svg';

export const Advantage = () => {
    const advantageOptions = [
        {
            icon: <Image src={icon1} alt="Image" width={110} height={30} />,
            title: "6j/7",
            desc: "À l'écoute de vos besoins en permanence et disponible pour vous aider dans votre quotidien.",
            color: 'rgba(104, 184, 190, 1)',
        },
        {
            icon: <Image src={icon2} alt="Image" width={110} height={30} />,
            title: "+ 95%",
            desc: "Nos clients satisfaits, l'un des critères les plus importants pour l'équipe Smilifood.",
            color: "rgba(166, 201, 204, 1)",
        },
        {
            icon: <Image src={icon3} alt="Image" width={110} height={30} />,
            title: "- 15 min",
            desc: "Temps de réponse moyen, les demandes de nos clients sont notre priorité.",
            color: "rgba(83, 135, 139, 1)",
        },
    ];

    return (
        <div className="relative w-1917 h-540">
            <div className="text-center p-4 text-5xl font-semibold text-[rgba(104,184,191,255)]">
                Nous vous gâtons !
            </div>
            <div className="text-center p-4 text-base text-black">
                Nous vous accompagnons pour transformer votre restaurant avec SmiliFood, la solution en ligne pour<br />
                des commandes et réservations simples et rapides.
            </div>

            <div className="flex justify-center p-0">
                {advantageOptions.map((option, index) => (
                    <div
                        key={index}
                        className="flex min-w-[250px] max-w-[330px] h-380 shadow-lg rounded-2xl m-5 flex-col justify-center items-center p-6"
                        style={{ backgroundColor: option.color }}
                    >
                        <div className="w-12 h-12 rounded-full mb-4 flex justify-center items-center">
                            {option.icon}
                        </div>
                        <div className="text-center text-2xl font-semibold text-white">
                            {option.title}
                        </div>
                        <div className="text-center p-2 text-sm font-semibold text-white">
                            {option.desc}
                        </div>
                    </div>
                ))}
            </div>
           
        </div>

    );
}
