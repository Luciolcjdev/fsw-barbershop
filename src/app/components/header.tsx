import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import Link from "next/link"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"

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
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
        {/* <SidebarSheet /> */}
      </CardContent>
    </Card>
  )
}

export default Header
