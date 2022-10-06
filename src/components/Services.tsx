import { Card } from './ui/Card'
import target from '../assets/cards/target.png'
import social from '../assets/cards/social-media.png'
import internet from '../assets/cards/internet.png'
import erp from '../assets/cards/erp.png'

export const SERVICES = [
  {
    title: 'Estratégia',
    icon: target,
    text: 'Criação de campanhas, materiais visuais e estratégia digitais',
    color: '#85ffe7',
  },
  {
    title: 'Gestão',
    icon: social,
    text: 'Gestão, criação de KY’s e de conteúdo para Instagram, Facebook e Linkedin',
    color: '#ff9dd4',
  },
  {
    title: 'Marketing Place',
    icon: internet,
    text: 'Vendas seus produtos em mktplace como Netshoes, Dafiti, Mercado Livre e B2W',
    color: '#85c8ff',
  },
  { 
    title: 'ERP',
    icon: erp,
    text: 'Implantação do ERP online Bling. Ferramenta de gestão para micro e pequena empresas',
    color: '#ffe985',
  }
]

export function Services() {
  return (
    <section id="servicos" className="bg-bg-service relative w-screen h-full bg-cover bg-center overflow-hidden pb-10" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-quad" >
      <div className="pt-44 lg:pt-12 m-auto w-full lg:px-40 h-full lg:flex items-center text-center lg:text-start align-middle justify-between">
        <div className="flex-1 text-[#25234d]">
          <h1 className="text-[2.5rem] lg:text-5xl mb-8 leading-none font-bold">Levamos seu <br />negócio para o <br />próximo nível.</h1>

          <p className="text-base opacity-[81%] font-semibold mb-12 ">Na Clickecom você encontra muitas soluções para otimizar a 
            gestão da sua loja virtual. <br />Conte com nossos todos os nossos recursos 
            para melhorar a sua experiência e a de seus clientes.
          </p>

          <a href="#contato" className="bg-[#514756] w-48 h-12 py-3 px-8 rounded-[35px] text-white text-base leading-normal align-middle hover:bg-[#514770] m-auto lg:m-0">
            Saiba mais
          </a>
        </div>

        <div className="flex-[2] max-w-[44rem] md:mx-auto lg:mx-0 grid md:grid-cols-cards md:gap-4 lg:gap-8 p-8 lg:p-16" data-aos="flip-down" data-aos-duration="2000" data-aos-easing="ease-in-quad">
          {
            SERVICES.map(({title, icon, text, color}) => {
              return (
                <Card key={title} title={title} icon={icon} text={text} color={color} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}  