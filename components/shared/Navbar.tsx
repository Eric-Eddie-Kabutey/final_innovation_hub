"use client";
import { useState } from "react";
import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "@/components/ui/navbar";
// The 'useRouter' import is no longer needed if 'router' is not used:
// import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Menu } from "lucide-react";
import Link from "next/link";
import logo from "@/public/assets/images/logo_tef.png";
import Image from "next/image";
import Typography from "./typography";
import { VisuallyHidden } from "@/components/ui/visually-hidden";

export default function Navbar() {
  const [isSheetOpen, setSheetOpen] = useState(false);
  return (
    <header className="max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto sticky top-6 z-50 -mb-4 px-4 border rounded-[1.2rem] shadow-md bg-white ">
      <div className="relative mx-auto ">
        <NavbarComponent>
          <NavbarLeft>
            <Link
              href="/"
              className=" flex items-center gap-2 text-xl font-bold"
            >
              <div className="w-10 h-fit">
                <Image src={logo} alt="Innovation logo" />
              </div>
              <div className="hidden xs:flex items-center gap-">
                <Typography
                  typo="header-6-medium"
                  className="uppercase text-gray-500"
                >
                  Innovation
                </Typography>
                <Typography typo="header-6-medium" className="uppercase">
                  Hub
                </Typography>
              </div>
            </Link>
          </NavbarLeft>
          <NavbarRight className="md:flex items-center">
            <Navigation />
            <Button variant="primary" className="hidden md:block">
              <Link href="/donate">
                <span className="lg:hidden">Donate</span>
                <span className="hidden lg:inline">Donate Now</span>
              </Link>
            </Button>
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}
            <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="flex flex-col">
                <VisuallyHidden>
                  <SheetTitle>Main Navigation</SheetTitle>
                </VisuallyHidden>
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-xl font-bold"
                    onClick={() => setSheetOpen(false)} // Consider if this link needs to be bold on mobile. Changed to font-medium for consistency.
                  >
                    <span>Innovation Hub</span>
                  </Link>
                  <Link
                    href="/about-us"
                    className="text-muted-foreground hover:text-foreground"
                    onClick={() => setSheetOpen(false)}
                  >
                    Who we are
                  </Link>
                  <Link
                    href="/our-pillars"
                    className="text-muted-foreground hover:text-foreground"
                    onClick={() => setSheetOpen(false)}
                  >
                    Our Pillars
                  </Link>
                  {/* Moved Events out of the Accordion to be a standalone link */}
                  <Link
                    href="/events"
                    className="text-muted-foreground hover:text-foreground"
                    onClick={() => setSheetOpen(false)}
                  >
                    Events
                  </Link>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="border-b-0">
                      <AccordionTrigger className="py-0 text-lg font-medium text-muted-foreground hover:no-underline hover:text-foreground">
                        Resources
                      </AccordionTrigger>
                      <AccordionContent className="grid gap-4 pl-6 pt-4">
                        {/* TODO: Update with your actual resource links */}
                        <Link
                          href="/blog"
                          className="text-muted-foreground hover:text-foreground"
                          onClick={() => setSheetOpen(false)}
                        >
                          Blog
                        </Link>
                        <Link
                          href="/reports"
                          className="text-muted-foreground hover:text-foreground"
                          onClick={() => setSheetOpen(false)}
                        >
                          Reports
                        </Link>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </nav>
                <div className="mt-auto">
                  <Button
                    variant="primary"
                    className="w-full"
                    onClick={() => setSheetOpen(false)}
                  >
                    <Link href="/donate">Donate Now</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
