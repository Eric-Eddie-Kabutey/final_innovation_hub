"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./navigation-menu";
import LaunchUI from "../logos/launch-ui";


const links: { title: string; href: string; description: string, links?: { title: string; href: string; description: string }[] }[] = [
  {
    title: "About Us",
    href: "/about-us",
    description:
      "For sighted users to preview content available behind a link.",
  },
  // {
  //   title: "Services",
  //   href: "/product",
  //   description:
  //     "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  //   links: [
  //     {
  //       title: "Introduction",
  //       href: "/docs",
  //       description:
  //         "Re-usable components built using Radix UI and Tailwind CSS.",
  //     },
  //     {
  //       title: "Installation",
  //       href: "/docs/installation",
  //       description:
  //         "How to install dependencies and structure your app.",
  //     },
  //     {
  //       title: "Typography",
  //       href: "/doc/typography",
  //       description:
  //         "Styles for headings, paragraphs, lists...etc",
  //     },
  //   ]
  // },
  {
    title: "Services",
    href: "/services",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Contact Us",
    href: "/contact-us",
    description:
      "Get in touch with our team for any questions or inquiries.",
  },
];

export default function Navigation() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {
          links.map((link) => (
            link.links ? (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuTrigger>{link.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    {link.links.map((sublink) => (
                      <ListItem key={sublink.href} href={sublink.href} title={sublink.title}>
                        {sublink.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
              <NavigationMenuItem key={link.href}>
                <Link href={link.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} title={link.description}>
                    {link.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            )
          ))
        }
       
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
