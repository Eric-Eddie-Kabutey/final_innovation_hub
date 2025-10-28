
'use client';
import Link from "next/link";
import Image from "next/image";
import Typography from "./typography";
import logo from "@/public/assets/images/logo_tef.png"


export default function Footer() {
    return (
        <div className="w-full py-12">
            <section className="max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex xs:flex-row flex-col justify-between gap-12">
                <div className=" md:w-[35%] flex flex-col gap-4">
                    {/* <RedLinesBackground /> */}
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
                    <div className="w-fit flex flex-col items-center text-gray-600">
                        <Typography
                            typo="header-5-medium"
                            className="uppercase text-center"
                        >Empowering</Typography>
                        <Typography
                            typo="header-3-medium"
                            className="uppercase text-center"
                        >African</Typography>
                        <Typography
                            typo="header-5-medium"
                            className="uppercase text-center"
                        >Entrepreneurs</Typography>
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-6">
                    <Typography
                        typo="body-large-light"
                    >Connect with Us</Typography>
                    <div className="flex flex-col gap-2 text-[16px] font-light">
                        <Link href="/">Linkedin</Link>
                        <Link href="/">Facebook</Link>
                        <Link href="/">X.com</Link>
                        <Link href="/">Instagram</Link>
                    </div>
                    <div className="font-light">
                        <Link href="/">Privacy Policy</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
