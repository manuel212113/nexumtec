import Image from "next/image";

const Digital = () => {
    return (

        <div className="mx-2">
            <div className='mx-auto max-w-7xl px-4 my-40 pb-20 lg:pb-40 lg:px-8 bg-digital rounded-3xl bg-blue relative'>
                <div className='grid grid-cols-1 lg:grid-cols-2 my-16'>

                    {/* COLUMNA 1 */}

                    <div className="pt-24 lg:pl-24 ">
                        <h3 className="text-lg font-normal text-white mb-5 tracking-widest text-center lg:text-start">QUIÉNES SOMOS</h3>
                        <h4 className="text-4xl sm:text-6xl font-bold text-white mb-8 leading-snug text-center lg:text-start">
                            Desarrollamos software <br /> para impulsar tu negocio.
                        </h4>
                        <div className="text-center lg:text-start">
                            <button className="text-xl font-semibold text-white bg-btnblue py-4 px-12 hover:bg-hoblue rounded-full">
                                Comenzar
                            </button>
                        </div>
                        
                    </div>

                    {/* COLUMNA 2 */}

                    <div>
                        <div className="lg:absolute girldoodle">
                            <Image src="/images/digital/programador.png" alt="girldoodle" width={700} height={700} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}



export default Digital;
