import dafiti from '../assets/dafiti.png'
import centauro from '../assets/centauro.png'
import b2w from '../assets/b2w.png'
import magazine from '../assets/magazine.png'
import shopee from '../assets/shopee.png'
import mercadolivre from '../assets/mercadolivre.png'
import { Bubble } from './ui/Bubble'

export function Brands() {
  return (
    <section className="z-20 w-screen h-[950px] lg:mt-10 relative bg-bg-brands bg-cover bg-center overflow-hidden" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-quad">
      <div className="m-auto w-full px-6 lg:px-40 h-auto top-20 left-0 right-0 flex flex-col items-center justify-center text-center text-white pt-20 lg:pt-24">
        <div>
          <span className="text-xl tracking-widest leading-loose">SEU PRODUTOS NAS MAIORES</span>
          <h1 className="text-5xl">Vitrines da internet</h1>
        </div>
        
        <div className="relative w-full lg:max-w-[40rem] rounded-[1.2rem] shadow-box-brands mt-20 mb-8 px-32 py-10 md:py-20 lg:px-40 grid md:grid-cols-brands grid-cols-1 bg-white items-center justify-center gap-6 md:gap-12 lg:gap-16
        before:content-none before:w-[calc(40rem_-_10%)] before:h-[1.2rem] before:bg-[#514756] before:shadow-box-brands-before before:rounded-bl-[20px]">
           <img src={dafiti} alt="" width="120" height="auto"/>    
          <img src={centauro} alt="" width="120" height="auto"/>    
          <img src={b2w} alt="" width="120" height="auto"/>    
          <img src={magazine} alt="" width="120" height="auto"/>    
          <img src={shopee} alt="" width="120" height="auto"/>    
          <img src={mercadolivre} alt="" width="120" height="auto"/>    
        </div>
      </div>

      <Bubble top="12rem" left='16rem' width='4rem' height='4rem' />
      <Bubble top='12rem' right='16rem' />
      <Bubble top='24rem' left='86rem'  width='4rem' height='4rem' />
      <Bubble top='24rem' right='86rem' />
      <Bubble top='36rem' left='16rem' width='4rem' height='4rem' />
      <Bubble top='36rem' right='16rem' />
    </section>
  )
}