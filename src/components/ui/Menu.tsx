import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';


export function Menu() {
  return (
    <>
      <div className="hidden lg:block -ml-8 pt-2 leading-none">
        <NavigationMenu.Root>
          <NavigationMenu.List className="flex gap-8">
            <NavigationMenu.Item className="hover:underline hover:underline-offset-4">
              <NavigationMenu.Link href="#">Home</NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item className="hover:underline hover:underline-offset-4">
              <NavigationMenu.Link href="#sobre-nos">Sobre nós</NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item className="hover:underline hover:underline-offset-4">
              <NavigationMenu.Link href="#servicos">Serviços</NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>

      <div className="lg:hidden absolute right-9">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button aria-label="Customise options" className="bg-white p-2 rounded-full">
              <HamburgerMenuIcon color="#000" />
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Content className="bg-white text-black p-4 mt-2 mr-2 rounded-sm shadow-lg">
            
            <DropdownMenu.Item className="my-2 px-4 text-zinc-600 hover:text-zinc-800">
              <a href="#contato">Contato</a>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </>
  )
}