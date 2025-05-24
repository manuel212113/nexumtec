import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
    link: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "C# Desarrollo.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
        paragraph: 'Dominamos el desarrollo en C# para crear aplicaciones robustas y escalables. Desde backend hasta aplicaciones de escritorio, ofrecemos soluciones de alta calidad.',
        link: 'Saber más'
    },
    {
        heading: "Python Web Scraping.",
        imgSrc: "https://logodownload.org/wp-content/uploads/2019/10/python-logo-1.png",
        paragraph: 'Automatizamos la recolección de datos web utilizando Python y sus librerías más potentes. Extraemos y procesamos información clave para potenciar tu negocio.',
        link: 'Saber más'
    },
    {
        heading: "Android & PHP.",
        imgSrc: "https://i.redd.it/some-app-icons-i-wanted-to-share-i-hope-you-enjoy-them-all-v0-ifxfyfa4ze1f1.png?width=3299&format=png&auto=webp&s=0cf1ccbe02d8e6d8253f825feafff20b7003da93", // Android logo
        paragraph: 'Creamos aplicaciones móviles en Android y soluciones web robustas en PHP. Desde sistemas de gestión hasta apps móviles intuitivas, llevamos tus ideas a la realidad.',
        link: 'Saber más'
    },
];

const Aboutus = () => {
    return (
        <div id="aboutus-section">
            <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative'>
                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
                <h3 className='text-center text-blue text-lg tracking-widest'>TECNOLOGÍAS DESTACADAS</h3>
                <h4 className='text-center text-4xl lg:text-65xl font-bold'>Nuestra experiencia tecnológica.</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-16 lg:gap-x-32'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group'>
                            <h4 className='text-4xl font-semibold text-black mb-5 group-hover:text-white'>{item.heading}</h4>
                            <img src={item.imgSrc} alt={item.heading} width={100} height={100} className="mb-5" />
                            <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>{item.paragraph}</h4>
                            <Link href="#" className='text-lg font-semibold group-hover:text-white text-blue hover-underline'>
                                {item.link}
                                <ChevronRightIcon width={20} height={20} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default Aboutus;