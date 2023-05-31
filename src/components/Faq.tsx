"use client";
import { Disclosure } from '@headlessui/react';
import Image from 'next/image';
import arrow from 'public/arrow.svg';

export const Faq = () => {
    const questionOptions = [
        {
            title: "J'ai plusieurs restaurants, avez-vous des offres dédiées ?",
            desc: "Oui il y a des offres dédiées ! Pour en savoir plus, contactez nous via notre formulaire de <a href='https://smilifood.vercel.app/contact' className='text-blue-500'>contact</a>.",
        },
        {
            title: "Dois-je installer moi-même Smili ?",
            desc: "Smilifood est un logiciel qui demande peu de temps pour le paramétrer et ne nécessite pas d'être un expert ;) <br/> Le logiciel est accompagné de tutoriels vidéo, au cas où vous auriez des difficultés ou des questions. Notre équipe se fera un plaisir de vous accompagner.",
        },
        {
            title: "Comment mes clients pourront payer ?",
            desc: "Smilifood vous permet de pouvoir prendre l’empreinte bancaire de vos clients pour vous assurez de ne plus avoir de no-shows ! Les paiements se font chez vous lorsque le client récupère sa commande. Bientôt Smili vous donnera la possibilité d’encaisser directement via le logiciel ! ",
        },
        {
            title: "La prise en main du logiciel est-t ’elle rapide ? ",
            desc: "Le logiciel Smili a été conçue dans l’optique d’être le plus complet possible et à la fois le plus simple possible. Il sera très simple de vous y habituez en peu de temp avec les tutoriels qui vous sont fournis avec le logiciel ! ",
        },
    ];


    return (
        <div className="flex items-center justify-center h-screen">
            <div className="items-center rounded-xl relative bg-gray-100" style={{ width: "1090px", minHeight: "700px" }}>
                <div className="max-w-2xl mx-auto p-8 text-center font-semibold text-lg leading-6 text-[rgba(104,184,191,255)]">
                    F.A.Q
                </div>
                <div className="text-center text-gray-700 text-5xl font-semibold leading-10">
                    Les questions qui reviennent
                </div>
                <br />
                <div className="flex flex-col space-y-4 p-8 items-center">
                    {questionOptions.map((question, index) => (
                        <Disclosure key={index}>
                            {({ open }) => (
                                <>
                                    <div>
                                        <Disclosure.Button className="lex w-full justify-between rounded-lg bg-white px-8 py-2 text-left text-sm font-medium text-black hover:bg-white focus:outline-none focus-visible:ring focus-visible:ring-white marker:focus-visible:ring-opacity-75" style={{ width: "950px", height: "100px" }}>
                                            <div className='flex items-center'>
                                                <div className='text-left text-lg'>
                                                    {question.title}
                                                </div>
                                                <div className='ml-auto'>
                                                    <Image src={arrow} alt="Image" width={35} height={50} className={`${open ? 'rotate-180 transform' : ''
                                                        }`} />
                                                </div>
                                            </div>
                                        </Disclosure.Button>

                                    </div>
                                    <Disclosure.Panel className="lex w-full justify-between rounded-lg px-8 py-2 text-left text-sm font-medium text-black focus:outline-none focus-visible:ring marker:focus-visible:ring-opacity-75" style={{ width: "950px", height: "auto" }}>
                                        <div className='flex items-center'>
                                            <div className='text-left text-base'>
                                                <div className="mt-2" dangerouslySetInnerHTML={{ __html: question.desc }} />
                                            </div>
                                        </div>


                                    </Disclosure.Panel>
                                </>
                            )
                            }
                        </Disclosure>
                    ))}
                    <div className="text-center text-gray-700 text-5xl font-semibold p-5">
                        Vous avez une question ?
                        <br />
                        <span className="text-black text-sm font-normal">Un de nos experts vous répondra dans les plus brefs délais.</span>
                        <div>
                            <a href="https://smilifood.vercel.app/contact" className="text-[rgba(104,184,191,255)] text-sm font-normal">
                                Form de contact
                            </a>
                        </div>

                    </div>
                </div>
            </div>

        </div>


    );

}      