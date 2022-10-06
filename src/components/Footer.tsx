import { InstagramLogo , FacebookLogo} from 'phosphor-react'
import logo from '../assets/logo.png'
import { Menu } from './ui/Menu'

export function Footer() {
  return (

    <footer className="lg:absolute inset-x-0 bg-bg-footer bg-center bg-cover min-h-[12rem] w-screen py-12 lg:pt-0 lg:pb-0 lg:py-0">
      <div className="flex justify-between align-middle text-white px-4 items-center lg:px-40 mt-12 lg:mt-0 lg:pt-32 h-40 pb-4 lg:pb-0">
        <img src={logo} alt="Clickecom" className="w-[150px] h-[100px]"/>

        <ul className="gap-8 hidden lg:flex ">
          <li><a href="#">Home</a></li>
          <li><a href="#sobre-nos">Sobre nós</a></li>
          <li><a href="#servicos">Serviços</a></li>
        </ul>

        <ul className="flex gap-4">
          <li><a href="https://facebook.com/#"><FacebookLogo size={32} /></a></li>
          <li><a href="https://instagram.com/clickecom"><InstagramLogo size={32} /></a></li>
        </ul>
      </div>
    </footer>


  )
}