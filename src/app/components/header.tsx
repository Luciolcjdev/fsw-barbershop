import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import Link from "next/link"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { Button } from "./ui/button"
import { CalendarDaysIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Separator } from "./ui/separator"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo Barbershop"
            width={120}
            height={18}
          />
        </Link>
        <div className="flex items-center gap-3">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent className="rounded-l-3xl">
              <SheetHeader>
                <SheetTitle className="item-center flex gap-2 text-xl font-semibold">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <div className="py-5">
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage />
                      <AvatarFallback>LCJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">Lucio Costa Junior</h3>
                      <span className="block text-xs text-muted-foreground">
                        luciolcj@gmail.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-sm font-semibold">
                <Separator className="mb-8" />
                <div className="flex flex-col gap-6">
                  <Link href="/" className="flex items-center gap-3">
                    <HomeIcon width={20} height={20} />
                    Início
                  </Link>

                  <Link href="/my-orders" className="flex items-center gap-3">
                    <CalendarDaysIcon width={20} height={20} />
                    Agendamentos
                  </Link>
                </div>

                <Separator className="my-8" />

                <div className="flex flex-col gap-6">
                  <Link href="/category/cabelo">
                    <Image src="./cabelo.svg" alt="Cabelo" />
                    Cabelo
                  </Link>
                  <Link href="/category/barba">Barba</Link>
                  <Link href="/category/Acabamento">Acabamento</Link>
                  <Link href="/category/sobrancelha">Sobrancelha</Link>
                  <Link href="/category/massagem">Massagem</Link>
                  <Link href="/category/hidratacao">Hidratação</Link>
                </div>
                <Separator className="my-8" />
                <Button variant="outline">
                  <LogOutIcon />
                  Sair da conta
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </CardContent>
    </Card>
  )
}

export default Header
