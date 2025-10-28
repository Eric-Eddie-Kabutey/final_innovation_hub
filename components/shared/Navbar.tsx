"use client"
import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import {
    Navbar as NavbarComponent,
    NavbarLeft,
    NavbarRight,
} from "@/components/ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import logo from "@/public/assets/images/logo_tef.png"
import Image from "next/image";
import Typography from "./typography";

export default function Navbar() {

    return (
        <header className="max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto sticky top-6 z-50 -mb-4 px-4 border rounded-[1.2rem] shadow-md bg-white">
            <div className="relative mx-auto ">
                <NavbarComponent>
                    <NavbarLeft>
                        <Link
                            href="/"
                            className=" flex items-center gap-2 text-xl font-bold"
                        >
                            <div className="w-10 h-fit">
                                <Image 
                                    src={logo}
                                    alt="Innovation logo"
                                />
                            </div>
                            <div className="flex items-center gap-">
                                <Typography
                                    typo="header-6-medium"
                                    className="uppercase text-gray-500"
                                >Innovation</Typography>
                                <Typography
                                    typo="header-6-medium"
                                    className="uppercase"
                                >Hub</Typography>

                            </div>
                        </Link>
                    </NavbarLeft>
                    <NavbarRight>
                        <Navigation />
                        <Button variant="primary">
                            <Link href="/">Apply Now</Link>
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
                        <Sheet>
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
                            <SheetContent side="right">
                                <nav className="grid gap-6 text-lg font-medium">
                                    <Link
                                        href="/"
                                        className="flex items-center gap-2 text-xl font-bold"
                                    >
                                        <span>KtechHub</span>
                                    </Link>
                                    <Link
                                        href="/"
                                        className="text-muted-foreground hover:text-foreground"
                                    >
                                        Getting Started
                                    </Link>
                                    <Link
                                        href="/"
                                        className="text-muted-foreground hover:text-foreground"
                                    >
                                        Components
                                    </Link>
                                    <Link
                                        href="/contact-us"
                                        className="text-muted-foreground hover:text-foreground"
                                    >
                                        Contact Us
                                    </Link>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </NavbarRight>
                </NavbarComponent>
            </div>
        </header>
    );
}
