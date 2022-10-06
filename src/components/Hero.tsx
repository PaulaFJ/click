import bgHero from '../assets/bg-ilustration.png'
import 'animate.css'

export function Hero() {
  return (
    <section data-aos="fade-down" data-aos-duration="1000" data-aos-easing="ease-in-quad" className="relative w-screen lg:h-[50rem] bg-bg-hero bg-cover bg-center overflow-hidden pb-36 z-0">
      <div className="m-auto w-screen lg:h-auto lg:absolute left-0 right-0 lg:flex lg:items-center lg:justify-between lg:pl-36">
        <div className="flex-1 flex flex-col text-white text-center items-center lg:items-start lg:text-start mt-36 lg:mt-0">
          <h1 className="text-[4rem] md:text-[6rem] leading-none font-bold animate__animated animate__fadeInDown">VENDA <span className="block text-[2rem]">em vários canais</span></h1>
          
          <p className="mt-10 text-base z-30 px-0 break-normal animate__animated animate__fadeInLeft animate__delay-1s">Levamos o seu negocio para o próximo nível.</p>
          <p className="mb-10 text-base z-30 px-2 lg:px-0 break-normal animate__animated animate__fadeInLeft animate__delay-1s">Aqui você conta com soluções para vendas no marketing place</p>

          <a href="#contato" className="animate__animated animate__fadeInUp animate__delay-2s bg-[#514756] w-48 h-12 py-3 px-8 rounded-[35px] text-white text-base leading-normal lg:align-middle hover:bg-[#514770] m-auto md:m-0">Entre em contato</a>
        </div>

        <div className="flex-auto hidden lg:block z-20 lg:mt-16 xl:mt-12  w-[100%] ml-auto p-0">
          <img src={bgHero} />
        </div>
      </div>
    </section>
  )
}