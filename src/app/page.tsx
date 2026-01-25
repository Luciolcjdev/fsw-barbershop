import { SearchIcon } from "lucide-react"
import Header from "./components/header"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Lucio!</h2>
        <p className="text-xs">Domingo, 25 de Janeiro de 2026</p>

        <div className="mt-6 flex items-center gap-2">
          {/* <Searchbar /> */}
          <Input type="search" placeholder="Pesquisar" className="border" />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/banner-01.png"
            alt="Agende com os melhores com FSW Barbershop"
            fill
            className="rounded-xl object-cover"
          />
        </div>
        <div>
          <h2 className="mt-6 text-xl font-bold">Agendamentos</h2>
        </div>
      </div>
    </div>
  )
}
