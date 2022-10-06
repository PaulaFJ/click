import logo from '../assets/logo.png'
import { Menu } from './ui/Menu'

export function Header() {
  return (
    <header className="absolute md:top-0 flex bg-transparent md:h-[80px] w-screen md:pr-32 md:pl-24 items-center justify-between text-white z-30">
      <img src={logo} alt="Clickecom" width="250" height="150" className="w-[250px] h-[150px]" />

      <Menu />

      <a href="#contato" className="hidden lg:block bg-[#514756] w-32 h-12 py-3 rounded-[35px] text-white text-base leading-normal text-center align-middle hover:bg-[#514770]">CONTATO</a>
    </header>
  )
}