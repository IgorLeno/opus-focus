"use client"
import Link from "next/link"
import { Settings, BarChart2, ShoppingBag } from "lucide-react"
import { SoundControls } from "@/components/sound-controls"

interface TopMenuProps {
  activeItem: string
}

export function TopMenu({ activeItem }: TopMenuProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="aoe4-top-menu bg-aoe-dark-blue border-b border-aoe-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="mr-8">
                <Link href="/qg">
                  <div className="flex items-center">
                    <span className="text-aoe-gold font-cinzel text-xl font-bold">Conquer Focus</span>
                  </div>
                </Link>
              </div>

              <nav className="hidden md:flex items-center space-x-1">
                <Link href="/qg" className={`aoe4-menu-item ${activeItem === "qg" ? "active" : ""}`}>
                  QG
                </Link>
                <Link href="/maps" className={`aoe4-menu-item ${activeItem === "maps" ? "active" : ""}`}>
                  MAPAS
                </Link>
                <Link href="/war-room" className={`aoe4-menu-item ${activeItem === "mapa-do-dia" ? "active" : ""}`}>
                  MAPA DO DIA
                </Link>
                <Link href="/tasks" className={`aoe4-menu-item ${activeItem === "tasks" ? "active" : ""}`}>
                  TAREFAS
                </Link>
              </nav>
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex items-center gap-2">
                <SoundControls />
              </div>
              <Link href="/stats" className="aoe4-icon-button">
                <BarChart2 className="h-5 w-5" />
              </Link>
              <Link href="/store" className="aoe4-icon-button">
                <ShoppingBag className="h-5 w-5" />
              </Link>
              <Link href="/settings" className="aoe4-icon-button">
                <Settings className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
