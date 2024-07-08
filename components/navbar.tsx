import { Navbar as NextUINavbar, NavbarContent, NavbarBrand, NavbarItem } from "@nextui-org/navbar";
import { Kbd } from "@nextui-org/kbd";
import { Input } from "@nextui-org/input";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { SearchIcon, Logo } from "@/components/icons";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { Avatar } from "@nextui-org/react";

export const Navbar = () => {
    let user = null;

    // if (global?.window !== undefined) {
    //     user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") as string) : null;
    // }
    const searchInput = (
        <Input
            aria-label="Search"
            classNames={{
                inputWrapper: "bg-default-100",
                input: "text-sm",
            }}
            endContent={
                <Kbd className="hidden lg:inline-block" keys={["command"]}>
                    K
                </Kbd>
            }
            labelPlacement="outside"
            placeholder="Search..."
            startContent={<SearchIcon className="pointer-events-none shrink-0 text-base text-default-400" />}
            type="search"
        />
    );

    return (
        <NextUINavbar className="bg-black" maxWidth="xl" position="sticky">
            {/* BRAND */}
            <NavbarBrand className="max-w-fit gap-3">
                <NextLink className="flex items-center justify-start gap-4" href="/">
                    <Logo className="bg-white" />
                    <p className="text-4xl font-bold text-white">JPOS</p>
                </NextLink>
            </NavbarBrand>

            <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
                <div className="ml-2 hidden justify-start gap-16 lg:flex">
                    {siteConfig.navItems.map((item) => (
                        <NavbarItem key={item.href}>
                            <NextLink
                                className={clsx(
                                    "text-white data-[active=true]:font-medium data-[active=true]:text-primary",
                                )}
                                color="foreground"
                                href={item.href}
                            >
                                {item.label}
                            </NextLink>
                        </NavbarItem>
                    ))}
                </div>
            </NavbarContent>

            <NavbarContent justify="end">
                {!user ? (
                    <>
                        <NavbarItem className="hidden lg:flex">
                            <Button as={Link} color="success" href="/login" variant="flat">
                                Sign In
                            </Button>
                        </NavbarItem>
                        <NavbarItem>
                            <Button as={Link} color="primary" href="#" variant="flat">
                                Sign Up
                            </Button>
                        </NavbarItem>
                    </>
                ) : (
                    <>
                        <NavbarItem className="hidden lg:flex">
                            <Avatar showFallback src="https://images.unsplash.com/broken" />
                        </NavbarItem>
                        <NavbarItem>
                            <Button as={Link} color="primary" href="#" variant="flat">
                                Sign Out
                            </Button>
                        </NavbarItem>
                    </>
                )}
            </NavbarContent>
            {/* <NavbarContent className="hidden basis-1/5 sm:flex sm:basis-full" justify="end">
                <NavbarItem className="hidden gap-2 sm:flex">
                    <Link isExternal href={siteConfig.links.twitter}>
                        <TwitterIcon className="text-default-500" />
                    </Link>
                    <Link isExternal href={siteConfig.links.discord}>
                        <DiscordIcon className="text-default-500" />
                    </Link>
                    <Link isExternal href={siteConfig.links.github}>
                        <GithubIcon className="text-default-500" />
                    </Link>
                    <ThemeSwitch />
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
                <NavbarItem className="hidden md:flex">
                    <Button
                        isExternal
                        as={Link}
                        className="bg-default-100 text-sm font-normal text-default-600"
                        href={siteConfig.links.sponsor}
                        startContent={<HeartFilledIcon className="text-danger" />}
                        variant="flat"
                    >
                        Sponsor
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className="basis-1 pl-4 sm:hidden" justify="end">
                <Link isExternal href={siteConfig.links.github}>
                    <GithubIcon className="text-default-500" />
                </Link>
                <ThemeSwitch />
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarMenu>
                {searchInput}
                <div className="mx-4 mt-2 flex flex-col gap-2">
                    {siteConfig.navMenuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    index === 2
                                        ? "primary"
                                        : index === siteConfig.navMenuItems.length - 1
                                          ? "danger"
                                          : "foreground"
                                }
                                href="#"
                                size="lg"
                            >
                                {item.label}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </div>
            </NavbarMenu> */}
        </NextUINavbar>
    );
};
