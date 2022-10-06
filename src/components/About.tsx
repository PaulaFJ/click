import bgAbout from '../assets/bg-about.png'

export function About() {
  return(
    <section id="sobre-nos" className="-mt-16 lg:mt-32 bg-transparent" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-quad" >
      <div className="lg:flex relative">
        <div className="lg:w-[75%] md:w-[70%] ml-4 md:mx-auto lg:ml-0">
          <img src={bgAbout} alt="" />
        </div>

        <div className="basis-1/2 flex flex-col text-center -mt-4 lg:mt-0 lg:text-start lg:text-base lg:align-middle lg:pt-24">
          <h1 className='mt-16 mb-12 lg:mb-24 text-[2.5rem] lg:text-[3rem] leading-none font-bold'>Mostre ao mundo <br />sua marca</h1>

          <p className="text-base opacity-[81%] font-semibold px-2 lg:px-0">Com a Clickecom, você leva seus produtos para todos os canais de <br />
            vendas, pois cuidamos de todos os detalhes de <br />
            tecnologia/programação entregando à você uma ferramenta
            pronto para uso.</p>
        </div>
      </div>
    </section> 
  )
}