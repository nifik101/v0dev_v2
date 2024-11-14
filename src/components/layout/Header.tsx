'use client'

import { Moon, Sun, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { type NavItem } from "@/types/types"
import { useLanguage } from "@/hooks/useLanguage"

interface HeaderProps {
  isDark: boolean;
  toggleDarkMode: () => void;
}

export function Header({ isDark, toggleDarkMode }: HeaderProps) {
  const { lang, toggleLanguage, t } = useLanguage();

  const navigation: NavItem[] = [
    { name: t.nav.home, href: "#home" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.blog, href: "#blog" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold">
          JN
        </Link>
        <nav className="hidden md:flex md:gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Tabs defaultValue={lang} className="hidden md:block">
            <TabsList>
              <TabsTrigger value="sv" onClick={() => toggleLanguage()}>
                SV
              </TabsTrigger>
              <TabsTrigger value="en" onClick={() => toggleLanguage()}>
                EN
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                ))}
                <Tabs defaultValue={lang}>
                  <TabsList>
                    <TabsTrigger value="sv" onClick={() => toggleLanguage()}>
                      SV
                    </TabsTrigger>
                    <TabsTrigger value="en" onClick={() => toggleLanguage()}>
                      EN
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}