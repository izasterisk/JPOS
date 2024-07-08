/* eslint-disable react/no-unescaped-entities */
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/react";
import { Link } from "@nextui-org/link";

import DefaultLayout from "@/layouts/default";

export default function ServicesPage() {
    return (
        <DefaultLayout>
            <section className="flex w-full flex-col items-center justify-center gap-4 rounded-lg bg-[#FAFAFA] py-10">
                <div className="flex size-full rounded-lg bg-[#ec5360]">
                    <div className="mt-10 w-1/2 px-24">
                        <h1 className="mb-8 text-5xl text-white">Design Your Own Unique Jewelry</h1>
                        <p className="text-white">
                            Take a moment to explore your creativity and individuality by designing your own jewelry. At
                            JPOS, we believe that everyone has a unique story and style. That's why we invite you to
                            become your own designer, to craft a piece that truly reflects who you are. So why settle
                            for mass-produced jewelry when you can create something one-of-a-kind? Embrace your inner
                            designer and let your imagination run wild. Design your own jewelry at JPOS and make a
                            statement that's uniquely yours.
                        </p>
                        {/* SAO CHỖ QQ NÀY RERENDER LẠI VẬY */}
                        <Link href="/contact">
                            <Button className="mt-8 font-bold" color="warning" radius="full" size="lg">
                                Contact us now
                            </Button>
                        </Link>
                    </div>
                    <div className="flex h-full w-1/2 items-center justify-center rounded-lg bg-red-400">
                        <Image alt={"ring"} src={"/img/band/ringbox.png"} />
                    </div>
                </div>
            </section>
        </DefaultLayout>
    );
}
